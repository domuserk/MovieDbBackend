import { Router } from 'express'

import { CreateUserController } from '../modules/users/useCases/createUser/createUserController'

import { UserAccountExistsController } from '../modules/users/useCases/verifyAccount/userAccountExistsController'

import { AuthenticateUserController } from '../modules/users/useCases/verifyAccount/authenticateController'

const router = Router();

const createUser = new CreateUserController()

const user = new UserAccountExistsController()

const authenticateUserController = new AuthenticateUserController()

router.get('/sign', user.handle)

router.post('/sign-up', createUser.handle)  

router.post('/authenticate', authenticateUserController.handle)


export { router }