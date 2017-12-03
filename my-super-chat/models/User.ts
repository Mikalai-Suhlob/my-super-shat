import {Mongoose} from '../core'

interface IUser{
    login?: string;
    nickName?: string;
    password?: string;
    regDate?: Date;
    regIp?: string;
}

export interface IUserDocument extends IUser, Mongoose.Document {}

let Schema = new Mongoose.Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    nickName: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    regDate: {
        type: Date,
        default: Date.now
    },
    regIp: {
        type: String,
        required: true
    }

})

export const User = Mongoose.model<IUserDocument>('user', Schema, 'users', true)