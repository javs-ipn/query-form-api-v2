import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('query')
export class UserController {
    constructor(private userService: UsersService) { }

    @Post('/')
    public saveQuery(@Body() user: any): Promise<any> {
        return this.userService.createUser(user);
    }
}
