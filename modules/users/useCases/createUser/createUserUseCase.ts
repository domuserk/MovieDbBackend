import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'
import '../../../../shared/container'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository
  ) {}

  async execute({
    email,
    name,
    username,
    password,
    age,
    isAdmin
  }): Promise<void> {
    
     const userAlreadyExists = await this.usersRepository.findByEmail(email)
      if (userAlreadyExists) {
        throw new Error('User Already Exists')
    }

    const passwordHash = await hash(password, 8)
    
    await this.usersRepository.create({
    email,
    name,
    username,
    password: passwordHash,
    age,
    isAdmin
    })
  }
}

export { CreateUserUseCase }