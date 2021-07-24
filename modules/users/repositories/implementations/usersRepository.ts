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
        email,
        name,
        username,
        password,
        age,
        isAdmin})
        console.log('name',name)
     
      await this.repository.save(user)
    }

    async verifyUserAccountSign({ emailOrUsername, password }) {
        if(emailOrUsername && password) {
            let format = "@gmail.com"
            let isEmail = 'email',
            isUsername = 'username';
        
            const result = emailOrUsername.includes(format) ? await this.createQuerySearchUser(emailOrUsername, isEmail,password) : await this.createQuerySearchUser(emailOrUsername, isUsername, password);
            return result;
        }
        return;
        
    }
    
    async createQuerySearchUser(emailOrUsername, type, password) {

        const resp =  await this.repository
        .createQueryBuilder("user") 
        .where(`user.${type} = '${ emailOrUsername }' and user.password = ${password}`,)
        .execute();

        const result = type == 'email' ? resp : resp;

        return result;
    }

     async findByEmail(email: string): Promise<any> {
        return await this.repository.findOne({email});
     }
  
}



export { UsersRepository }