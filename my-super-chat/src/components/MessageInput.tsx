import "./MessageInput.scss"

import {Component} from 'react'

interface IMessageInputProps {
    active: boolean
    onClickSend: (...args: any[]) => void
    onClickSmile: (...args: any[]) => void
}

export default class MessageInput extends Component<IMessageInputProps>{

    public addSmile(e) {
        let f: any = this['refs']['mess']
        let inp: HTMLTextAreaElement = f
        inp.value += e
    }

    render() {
        let className = this.props.active ? 'active' : ''

        return (
            <div className="message-input">
                <textarea ref={"mess"}></textarea>
                <div className="btns">
                    <button className={className} onClick={this.props.onClickSmile}></button>
                    <button onClick={this.props.onClickSend}></button>
                </div>
            </div>
        )
    }
}