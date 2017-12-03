import './Login.scss'

import {Component} from 'react'

import MessageInput from './MessageInput'
import SmilesList from './SmilesList'

export default class Login extends Component<{socket: SocketIO.Socket, login: string, nickName: string}, {login: string, nickName: string, smiles: boolean}>{
    public fork = true

    constructor(props){
        super(props)

        this.state = {login: props.login, nickName: props.nickName, smiles: false}
    }

    logout() {
        if(!this.fork)
            return;

        this.props.socket.emit('logout')
    }

    componentWillUnmount() {
        this.fork = false
    }

    showSmiles(e: MouseEvent) {
        e.preventDefault()
        this.setState({smiles: !this.state.smiles})
    }

    sendMessage() {

    }

    render() {
        let addSmile: any
        return (
            <div className="chat-app">
                <div className="header">
                    <ul>
                        <li className="info">
                            <div>{this.state.login}</div>
                            <div>{this.state.nickName}</div>
                        </li>
                        <li onClick={this.logout.bind(this)} className="close btn">Выход</li>
                    </ul>
                </div>

                <div className="container">
                    <div className="list-container">

                    </div>

                    <div className="messages-container">
                        <div className="messages-back">
                            <div className="message">
                                <div className="message-object">
                                    <p className="name">vic<small>vic</small></p>
                                    <div className="mess">
                                        <p>Я узнал, что у меня</p>
                                        <p>Есть огромная семья:</p>
                                        <p>Мак и белый порошек</p>
                                        <p>Конопли большой мешек</p>
                                        <p>Водка, пиво розливное</p>
                                        <p>Это все, мое, родное</p>
                                        <p>Все на свете прет меня</p>
                                        <p>Наркоман наверно я!!!</p>
                                    </div>
                                    <p className="date">17:09</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <SmilesList show={this.state.smiles} addSmile={e => (addSmile = this['refs']['mess']['addSmile'](e))} />
                    <MessageInput ref="mess" active={this.state.smiles} onClickSend={this.sendMessage.bind(this)} onClickSmile={this.showSmiles.bind(this)}/>
                </div>
            </div>
        )
    }
}