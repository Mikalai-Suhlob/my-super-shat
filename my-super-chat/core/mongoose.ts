import * as mongoose from 'mongoose'

import cfg from '../config'

function setPromise(mongoose: any, promise: any) {
    mongoose.Promise = Promise
}

const options = {
    useMongoClient: true
}

setPromise(mongoose, Promise)

mongoose.connect(cfg.mongoDbString, options)

export default mongoose

export {mongoose as Mongoose}