import { InjectRepository } from '@nestjs/typeorm';
import { GenericNotFoundError } from 'src/errors/generic-not-found.error';
import { Service } from 'typedi/decorators/Service';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Service()
export class UsersService {
    private users: any[];

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async findOne(email: string): Promise<User | undefined> {
        this.users = await this.getAllUsers();
        return this.users.find(user => user.email === email);
    }

    public async createUser(user: any): Promise<User> {
        console.log("user", user);
        const userToBeSaved = await this.userRepository.save(user);
        if (!userToBeSaved) {
            throw new GenericNotFoundError(userToBeSaved.user, undefined);
        }
        return userToBeSaved;
    }

    public async getAllUsers(): Promise<User[]> {
        const allUsers = await this.userRepository.find({});
        if (!allUsers) {
            throw new GenericNotFoundError(allUsers + '', undefined);
        }
        return allUsers;
    }
}
