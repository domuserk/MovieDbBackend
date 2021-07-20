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

        let format = "@gmail.com"
        let isEmail = 'email',
        isUsername = 'username';
      
        const result = emailOrUsername.includes(format) ? await this.createQuerySearchUser(emailOrUsername, isEmail) : await this.createQuerySearchUser(emailOrUsername, isUsername);
        return result;
    }
    
    async createQuerySearchUser(emailOrUsername, type) {

        const resp =  await this.repository
        .createQueryBuilder("user") 
        .where(`user.${type} = '${ emailOrUsername }' `,)
        .execute();

        const result = type == 'email' ? resp : resp;

        return result;
    }
    // async findByEmail({ email }) {
    //     return await this.repository.findOne(email);
    // }
  
}



export { UsersRepository }