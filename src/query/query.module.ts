import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DB } from 'src/db/db.entity';
import { DBService } from 'src/db/db.service';
import { QueryController } from "./query.controller";
import { Query } from "./query.entity";
import { QueryService } from "./query.service";

@Module({
  imports: [TypeOrmModule.forFeature([Query]), TypeOrmModule.forFeature([DB])],
  controllers: [QueryController],
  providers: [QueryService, DBService],
})
export class QueryModule {}
