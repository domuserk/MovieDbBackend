import { getConnectionManager, getRepository, Repository } from 'typeorm'
import { User } from '../../entities/user';

class UsersRepository {

    private repository: Repository<User>
    
    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        id,
        email,
        name,
        username,
        password,
        age,
        isAdmin
    }) {
        const user = await this.repository.create({
        id,
        name,
        username,
        age,
        password,
        email,
        isAdmin})
      await this.repository.save(user)
    }
  
}



export { UsersRepository }