import * as socketIo from 'socket.io'
import * as sharedSession from 'express-socket.io-session'

import Server from './server'
import Session from './session'

export const Socket = socketIo(Server)

Socket.use(sharedSession(Session, {
    autoSave: true
}))

export default Socket