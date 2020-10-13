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

    @Post('/reject-query')
    public rejectQuery(@Body() query: any): Promise<any> {
        return this.queryService.rejectQuery(query);
    }

    @Post('/approve-query')
    public approveQuery(@Body() query: any): Promise<any> {
        return this.queryService.approveQuery(query);
    }

    @Post('/user-pending-queries')
    public userPendingQueries(@Body() user: any): Promise<any> {
        return this.queryService.userPendingQueries(user);
    }
}
