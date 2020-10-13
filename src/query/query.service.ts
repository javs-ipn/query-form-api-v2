import { InjectRepository } from '@nestjs/typeorm';
import { GenericNotFoundError } from 'src/errors/generic-not-found.error';
import { Service } from 'typedi/decorators/Service';
import { Repository } from 'typeorm';
import { Query } from 'typeorm/driver/Query';
import * as mysql from 'mysql';
import { DBService } from 'src/db/db.service';

@Service()
export class QueryService {
    public queryError: boolean;

    constructor(
        @InjectRepository(Query) private queryRepository: Repository<Query>,
        public dbService: DBService
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
        const pendingQueries = await this.queryRepository.find();
        if (!pendingQueries) {
            throw new GenericNotFoundError(pendingQueries + '', undefined);
        }
        return pendingQueries;
    }

    public async rejectQuery(query: any): Promise<Query> {
        query.statusId = 3;
        const queryToBeSaved = await this.queryRepository.save(query);
        if (!queryToBeSaved) {
            throw new GenericNotFoundError(queryToBeSaved.query, undefined);
        }
        return queryToBeSaved;
    }

    public async approveQuery(query: any): Promise<any> {
        const db = await this.dbService.getDbById(query.dbId);
        const queryRequest: any = {
            host: db[0].privateIp,
            pass: db[0].password,
            userName: db[0].userName,
            query: query.query,
        };
        await this.executeQuery(queryRequest);
        if (this.queryError) {
            return false;
        }
        await this.queryAccepted(query);
        return true;
    }

    public async executeQuery(queryRequest: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const conn = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'query_form',
            });
            conn.query(queryRequest.query, (error, rows, fields) => {
                if (error) {
                    this.queryError = true;
                } else {
                    this.queryError = false;
                }
                resolve();
            });
            conn.end();
        });
    }

    public async queryAccepted(query: any): Promise<any> {
        query.statusId = 2;
        const queryToBeSaved = await this.queryRepository.save(query);
        if (!queryToBeSaved) {
            throw new GenericNotFoundError(queryToBeSaved.query, undefined);
        }
        return queryToBeSaved;
    }

    public async userPendingQueries(user: any): Promise<Query[]> {
        const pendingQueries = await this.queryRepository.find({ where: { userName: user.email }});
        if (!pendingQueries) {
            throw new GenericNotFoundError(pendingQueries + '', undefined);
        }
        return pendingQueries;
    }
}
