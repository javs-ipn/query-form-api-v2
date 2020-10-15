import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DBService } from './db.service';

@Controller('db')
export class DBController {
    constructor(private dbService: DBService) { }
    
    @UseGuards(JwtAuthGuard)
    @Get('/')
    public saveQuery(): Promise<any> {
        return this.dbService.getDatabases();
    }
}
