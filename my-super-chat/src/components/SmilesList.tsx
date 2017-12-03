import "./SmilesList.scss"

import {Component} from 'react'

import smiles from '../smiles'

export default class SmilesList extends Component<{show: boolean, addSmile: (e: string) => void}> {
    render() {
        return (
            <div style={{display: this.props.show ? 'block' : 'none'}} className="smiles">
                <ul>
                    {smiles.map((e, i) => <li onClick={() => this.props.addSmile(e) } key={"s"+i}>{e}</li>)}
                </ul>
            </div>
        )
    }
}