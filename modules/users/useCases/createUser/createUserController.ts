import { Request, Response } from 'express'
import { container } from 'tsyringe'

import '../../../../shared/container'

import { CreateUserUseCase } from './createUserUseCase'

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {  email, name, username, password, age, isAdmin } = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase)
        await createUserUseCase.execute({
            email,
            name,
            username,
            password,
            age,
            isAdmin
        })
        return response.status(201).send()
      }
}

export { CreateUserController }