import { Module } from '@nestjs/common';
import { NotebookService } from './notebook.service';
import { NotebookController } from './notebook.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotebookEntity} from "./entities/notebook.entity";

@Module({
  controllers: [NotebookController],
  providers: [NotebookService],
  imports: [TypeOrmModule.forFeature([NotebookEntity])]
})
export class NotebookModule {}
