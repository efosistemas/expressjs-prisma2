import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post('/login', new UserController().login)
routes.post('/user', new UserController().create)
routes.get('/users', authMiddleware, new UserController().users)
routes.get('/profile', authMiddleware, new UserController().getProfile)


export default routes
