import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {
    constructor(private queryService: QueryService) { }
    
    @UseGuards(JwtAuthGuard)
    @Post('/')
    public saveQuery(@Body() query: any): Promise<any> {
        return this.queryService.saveQuery(query);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/pending-queries')
    public getPendingQueries(): Promise<any> {
        return this.queryService.getPendingQueries();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/reject-query')
    public rejectQuery(@Body() query: any): Promise<any> {
        return this.queryService.rejectQuery(query);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/approve-query')
    public approveQuery(@Body() query: any): Promise<any> {
        return this.queryService.approveQuery(query);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/user-pending-queries')
    public userPendingQueries(@Body() user: any): Promise<any> {
        return this.queryService.userPendingQueries(user);
    }
}
