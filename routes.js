import {Router} from 'express'
import planilhaController from './src/planilhaController'

const routes = Router()

routes.post('/',planilhaController.store)
routes.get('/ver',planilhaController.view)

export default routes