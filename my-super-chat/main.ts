import {App, Socket, md5} from './core'
import {User, IUserDocument} from './models'
import * as check from './lib/check'

App.get('/', (req, res) => res.render('main'))

Socket.on('connection', async (socket) => {
    let session = socket.handshake['session']
    let {login = null, password = null} = <{login: string, password: string}>session
    let user: IUserDocument = null


    if(!login || !password || !(user = await User.findOne({login, password}))) {
        socket.on('login', async (data: check.ILoginData) => {
            socket.emit('auth-load')

            let error: {error: string} = null

            if((error = check.loginData(data)))
                return socket.emit('auth', error)

            let {login, password} = data

            password = md5(password)

            if(data.type === 0) {
                let user = await User.findOne({login, password})

                if(!user)
                    return socket.emit('auth', {error: 'Не верный логин или пароль', type: 0})

                socket.handshake['session'].login = user.login
                socket.handshake['session'].password = user.password

                socket.handshake['session'].save()

                socket.disconnect(true)
            }else {
                if(await User.findOne({login}))
                    return socket.emit('auth', {error: 'Логин уже кем то занят', type: 1})
                let ip = socket.handshake.address
                let user = new User({login, password, nickName: login, regIp: ip})

                await user.save()

                socket.handshake['session'].login = user.login
                socket.handshake['session'].password = user.password

                socket.handshake['session'].save()

                socket.disconnect(true)
            }
        })

        return socket.emit('auth', {error: ''});
    } else {
        socket.on('logout', () => {
            socket.handshake['session'].login = null
            socket.handshake['session'].password = null

            socket.handshake['session'].save()

            socket.disconnect(true)
        })

        return socket.emit('login', {login: user.login, nickName: user.nickName})
    }

})