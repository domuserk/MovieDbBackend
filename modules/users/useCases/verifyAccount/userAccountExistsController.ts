import { Request, Response } from 'express'
import { container } from 'tsyringe'

import '../../../../shared/container'

import { UserAccountExists } from './userAccountExists'

class UserAccountExistsController {
    async handle(request: Request, response: Response): Promise<Response> {
        
            const resp = request.query;
            const emailOrUsername = resp.emailOrUsername
            const password =  resp.password
            const verifyUserAccount = container.resolve(UserAccountExists)
            const userSign = await verifyUserAccount.execute({
                emailOrUsername,
                password
            })
            if(userSign) {
              return response.status(201).json({ sign: true })
            }
            return response.status(400).json({ sign: false })
        }
}

export { UserAccountExistsController }