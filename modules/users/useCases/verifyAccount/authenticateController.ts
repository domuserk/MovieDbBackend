import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthenticateUserUseCase } from './autheticateUser'

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { emailOrUsername, password } = request.body;
  console.log(emailOrUsername, password )
   const email = emailOrUsername
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const token = await authenticateUserUseCase.execute({ password, email })
    
    return response.json(token)
  }
}

export { AuthenticateUserController }