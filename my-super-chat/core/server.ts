import * as http from 'http'
import * as express from 'express'

import cfg from '../config'
import Session from './session'

export const App = express()
export const Server = http.createServer(App)

App.disable('x-powered-by')

App.set('view engine', 'ejs')
App.set('views', 'views')

App.use(express.static(cfg.publicDir))
App.use(Session)

Server.listen(cfg.httpPort, cfg.httpAddress)

export default Server