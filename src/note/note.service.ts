import {Injectable} from '@nestjs/common';
import {CreateNoteDto} from './dto/create-note.dto';
import {UpdateNoteDto} from './dto/update-note.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {NoteEntity} from "./entities/note.entity";
import {Repository} from "typeorm";
import {SwitchNoteDto} from "./dto/switch-note.dto";

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(NoteEntity)
        private repository: Repository<NoteEntity>
    ) {
    }

    async create(createNoteDto: CreateNoteDto) {
        const {notebook, ...dto} = createNoteDto
        let note = await this.repository.save({
            ...dto,
            notebook: {id: notebook}
        })
        //@ts-ignore
        note.notebook = notebook
        return note
    }

    findOne(id: number) {
        return this.repository.findOne({where: {id}, select: ['id', 'body', 'title']})
    }

    private updateNoteEntity(id: number, updateNoteDto: Partial<NoteEntity>) {
        return this.repository.update(id, updateNoteDto)
    }

    async update(id: number, updateNoteDto: UpdateNoteDto) {
        await this.updateNoteEntity(id, updateNoteDto)
        let note = await this.repository.findOne({relations: ['notebook'], where: {id}, select: ['body', 'id', 'title']})
        //@ts-ignore
        note.notebook = note.notebook.id
        return note
    }

    async switch(newNotebookId: number, switchNoteDto: SwitchNoteDto) {
        const {note_id} = switchNoteDto
        // @ts-ignore
        await this.updateNoteEntity(note_id, {notebook: {id: newNotebookId}})
        return this.findOne(note_id)
    }
}
