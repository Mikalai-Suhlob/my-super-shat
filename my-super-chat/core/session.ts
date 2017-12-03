import * as session from 'express-session'
import * as connectMongo from 'connect-mongo'

import mongoose from './mongoose'
import cfg from '../config'

const MongoStore = connectMongo(session)

export const Session = session({
    secret: cfg.sessionSecret,
    name: cfg.sessionIdName,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: mongoose.connection})
})

export default Session