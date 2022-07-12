import {Injectable} from '@nestjs/common';
import {CreateNotebookDto} from './dto/create-notebook.dto';
import {UpdateNotebookDto} from './dto/update-notebook.dto';
import {NotebookEntity} from "./entities/notebook.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class NotebookService {
    constructor(
        @InjectRepository(NotebookEntity)
        private repository: Repository<NotebookEntity>
    ) {}

    async create(createNotebookDto: CreateNotebookDto) {
        const {id} = await this.repository.save(createNotebookDto)
        return this.repository.findOne({where: {id}, relations: ['notes']})
    }

    findAll() {
        return this.repository.find({relations: ['notes']})
    }

    async update(id: number, updateNotebookDto: UpdateNotebookDto) {
        await this.repository.update(id, updateNotebookDto)
        return this.repository.findOneBy({id})
    }
}
