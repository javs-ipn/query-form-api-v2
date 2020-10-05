import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DBController } from './db.controller';
import { DB } from './db.entity';
import { DBService } from './db.service';

@Module({
  imports: [TypeOrmModule.forFeature([DB])],
  controllers: [DBController],
  providers: [DBService],
})
export class DBModule {}
