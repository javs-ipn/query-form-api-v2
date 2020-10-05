import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QueryController } from "./query.controller";
import { Query } from "./query.entity";
import { QueryService } from "./query.service";

@Module({
  imports: [TypeOrmModule.forFeature([Query])],
  controllers: [QueryController],
  providers: [QueryService],
})
export class QueryModule {}
