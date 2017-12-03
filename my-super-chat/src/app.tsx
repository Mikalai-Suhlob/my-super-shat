import "./app.scss"
import "./icons.scss"

declare function io(url: string, options?: any): SocketIO.Socket

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Auth from './components/Auth'
import Login from './components/Login'

const socket = io('/', {
    reconnection: true,
    reconnectionAttempts: 500,
    reconnectionDelay: 500,
    reconnectionDelayMax: 500
})

const root: Element = document.querySelector('.root-app')

socket.on('auth', (data) => {
    document.title = 'Авторизация'
    ReactDOM.render(<Auth socket={socket} {...data} />, root)
})

socket.on('login', (data) => {
    document.title = 'WSV-Chat'
    ReactDOM.render(<Login socket={socket} {...data}/>, root)
})

socket.on('auth-load', () => {
    document.title = 'Отправка...'
    ReactDOM.render(<div className="loader">Отправка...</div>, root)
})

socket.on('connect', () => {
    document.title = 'Загрузка...'
    ReactDOM.render(<div className="loader">Загрузка...</div>, root)
})

socket.on('disconnect', (reason) => {
    if(reason === 'io server disconnect')
        socket['connect']();

    document.title = 'Подключение'
    ReactDOM.render(<div className="loader">Подключение...</div>, root)
})