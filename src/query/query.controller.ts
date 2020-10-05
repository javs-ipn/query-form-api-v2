import { Body, Controller, Get, Post } from '@nestjs/common';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {
    constructor(private queryService: QueryService) { }

    @Post('/')
    public saveQuery(@Body() query: any): Promise<any> {
        return this.queryService.saveQuery(query);
    }

    @Get('/pending-queries')
    public getPendingQueries(): Promise<any> {
        return this.queryService.getPendingQueries();
    }
}
