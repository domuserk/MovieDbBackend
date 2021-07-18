import { getConnectionManager, getRepository, Repository } from 'typeorm'
import { User } from '../../entities/user';

class UsersRepository {

    private repository: Repository<User>
    
    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        id = 'a28d315c-1fc6-408f-9416-bbe3d05f6a0c',
        email,
        name,
        username,
        password = '12345',
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
        console.log('name',name)
      await this.repository.save(user)
    }

    async verifyUserAccountSign({ emailOrUsername, password }) {
      
        const resp =  await this.repository
        .createQueryBuilder("user") 
        .where(`user.email = '${emailOrUsername}' `,)
        .execute();
        
        return resp;
    }

    // async findByEmail({ email }) {
    //     return await this.repository.findOne(email);
    // }
  
}



export { UsersRepository }