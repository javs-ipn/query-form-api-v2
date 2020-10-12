import { InjectRepository } from '@nestjs/typeorm';
import { GenericNotFoundError } from 'src/errors/generic-not-found.error';
import { Service } from 'typedi/decorators/Service';
import { Repository } from 'typeorm';
import { Query } from 'typeorm/driver/Query';

@Service()
export class QueryService {
    constructor(
        @InjectRepository(Query) private queryRepository: Repository<Query>,
    ) { }

    public async saveQuery(query: any): Promise<Query> {
        query.statusId = 1;
        const queryToBeSaved = await this.queryRepository.save(query);
        if (!queryToBeSaved) {
        throw new GenericNotFoundError(queryToBeSaved.query, undefined);
        }
        return queryToBeSaved;
    }

    public async getPendingQueries(): Promise<Query[]> {
        const pendingQueries = await this.queryRepository.find({ where: { statusId: 1 }});
        if (!pendingQueries) {
        throw new GenericNotFoundError(pendingQueries + '', undefined);
        }
        return pendingQueries;
    }
}
