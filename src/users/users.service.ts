import { InjectRepository } from '@nestjs/typeorm';
import { GenericNotFoundError } from 'src/errors/generic-not-found.error';
import { Service } from 'typedi/decorators/Service';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Service()
export class UsersService {
    private readonly users: User[];

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    public async createUser(user: any): Promise<User> {
        const userToBeSaved = await this.userRepository.save(user);
        if (!userToBeSaved) {
            throw new GenericNotFoundError(userToBeSaved.user, undefined);
        }
        return userToBeSaved;
    }
}
