import { Router } from 'express'

import { CreateUserController } from '../modules/users/useCases/createUser/createUserController'

const router = Router();

const createUser = new CreateUserController()

router.get('/login-auth', (req, res) => {
    res.end('ryan')
})

router.post('/create-user', createUser.handle)  


export { router }