import { Controller, Get } from '@nestjs/common';
import { DBService } from './db.service';

@Controller('db')
export class DBController {
    constructor(private dbService: DBService) { }

    @Get('/')
    public saveQuery(): Promise<any> {
        return this.dbService.getDatabases();
    }
}
