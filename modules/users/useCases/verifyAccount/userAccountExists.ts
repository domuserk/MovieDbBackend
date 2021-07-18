import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'
import '../../../../shared/container'

@injectable()
class UserAccountExists {
  constructor(
    @inject('UsersRepository')
    private usersRepository
  ) {}

  async execute({
    emailOrUsername, 
    password
  }): Promise<any> {
    // const userAlreadyExists = await this.usersRepository.findByEmail(email)

    //  if (userAlreadyExists) {
    //    throw new Error('User Already Exists')
    //  }

    //const passwordHash = await hash(password, 8)
    
    const signAccount = await this.usersRepository.verifyUserAccountSign({
        emailOrUsername, 
        password
    })

    if(signAccount != '') {
        return signAccount;
    }
    return false;
  }
}

export { UserAccountExists }