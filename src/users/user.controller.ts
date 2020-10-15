import { Controller, Request, UseGuards } from '@nestjs/common';
import { Post } from 'routing-controllers';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
    constructor(private userService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    @Post('/')
    public saveUser(@Request() req): Promise<any> {
        return this.userService.createUser(req);
    }
}
