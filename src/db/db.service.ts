import { InjectRepository } from '@nestjs/typeorm';
import { GenericNotFoundError } from 'src/errors/generic-not-found.error';
import { Service } from 'typedi/decorators/Service';
import { Repository } from 'typeorm';
import { DB } from './db.entity';

@Service()
export class DBService {
    constructor(
        @InjectRepository(DB) private dbRepository: Repository<DB>,
    ) { }

    public async getDatabases(): Promise<DB[]> {
        const dbs = await this.dbRepository.find({});
        if (!dbs) {
        throw new GenericNotFoundError(dbs + '', undefined);
        }
        return dbs;
    }
}
