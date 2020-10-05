import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { QueryModule } from './query/query.module';
import { DBModule } from './db/db.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UsersModule, QueryModule, DBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
