import { container } from 'tsyringe'

import { UsersRepository } from '../../modules/users/repositories/implementations/usersRepository'

container.registerSingleton(
  'UsersRepository',
  UsersRepository
)
