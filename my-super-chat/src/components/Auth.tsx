import {Component} from 'react'
import * as check from '../../lib/check'

import './Auth.scss'

export default class Auth extends Component<{socket: SocketIO.Socket, error: string, type?: number}, {type: number, error: string}>{
    public fork = true;
    constructor(props) {
        super(props)

        this.state = {
            type: props.type || 0,
            error: props.error
        }
    }

    changeType() {
        if(!this.fork)
            return;

        this.setState({type: this.state.type ? 0 : 1})

        this.clearError()
    }

    sendData() {
        if(!this.fork)
            return;

        let data: any = {type: this.state.type}

        for(let key in this.refs){
            let a: any = this.refs[key]
            data[key] = a.value
        }

        let loginData: check.ILoginData = data
        let error: {error: string} = null

        if((error = check.loginData(loginData)))
            return this.setState(error)

        this.props.socket.emit('login', loginData)
    }

    onKeyDown(e: KeyboardEvent) {
        if(!this.fork)
            return;

        if(e.keyCode === 13)
            this.sendData();
    }

    onFocus(e: FocusEvent) {
        if(!this.fork)
            return;

        let t: any = e.target
        let input: HTMLInputElement = t

        window.addEventListener('keydown', this.onKeyDown.bind(this))

        input.onblur = () => {
            input.onblur = null
            window.removeEventListener('keydown', this.onKeyDown.bind(this))
        }
    }

    clearError() {
        if(!this.fork)
            return;

        if(this.state.error)
            this.setState({error: ''})
    }

    componentWillUnmount() {
        this.fork = false;
    }

    render() {
        let {type, error} = this.state

        return (
            <div className="login-form">
                <div className="header">
                    <p className="title">{type === 0 ? 'Авторизация' : 'Регистрация'}</p>
                    {error.length ? <p className="error">{error}</p> : ''}
                </div>
                <div className="form-input">
                    <span>Логин:</span>
                    <input ref="login" name="login" onFocus={this.onFocus.bind(this)} onInput={this.clearError.bind(this)} autoComplete="off" type="text" />
                </div>
                <div className="form-input">
                    <span>Пароль:</span>
                    <input ref="password" name="password" onFocus={this.onFocus.bind(this)} onInput={this.clearError.bind(this)} autoComplete="off" type="password" />
                </div>
                {type === 1 ? (
                    <div className="form-input">
                        <span>Пароль еще раз:</span>
                        <input ref="password2" name="password2" onFocus={this.onFocus.bind(this)} onInput={this.clearError.bind(this)} autoComplete="off" type="password" />
                    </div>
                ): ''}
                <div className="form-input">
                    <button onClick={this.sendData.bind(this)} style={{backgroundColor: "#3a85ff"}}>{type === 0 ? 'Войти' : 'Зарегистрироваться'}</button>
                    <button onClick={this.changeType.bind(this)} style={{backgroundColor: "#888"}}>{type === 0 ? 'Регистрация' : 'Авторизация'}</button>
                </div>
            </div>
        )
    }
}