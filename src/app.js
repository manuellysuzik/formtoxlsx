import express from 'express'
import routes from './../routes'

class App {
    constructor(){
        this.app = express()
        this.middleware()
        this.routes()
        
    }
    routes(){
        this.app.use(routes)
    }
    middleware(){
        this.app.use(express.json())
    }
}
export default new App().app