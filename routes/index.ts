import { Router } from 'express'

import { CreateUserController } from '../modules/users/useCases/createUser/createUserController'

import { UserAccountExistsController } from '../modules/users/useCases/verifyAccount/userAccountExistsController'

const router = Router();

const createUser = new CreateUserController()

const user = new UserAccountExistsController()

router.get('/sign', user.handle)

router.post('/sign-up', createUser.handle)  



export { router }