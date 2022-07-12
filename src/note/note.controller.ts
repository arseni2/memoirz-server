import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {NoteService} from './note.service';
import {CreateNoteDto} from './dto/create-note.dto';
import {UpdateNoteDto} from './dto/update-note.dto';
import {SwitchNoteDto} from "./dto/switch-note.dto";

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService) {
    }

    @Post('create')
    create(@Body() createNoteDto: CreateNoteDto) {
        return this.noteService.create(createNoteDto);
    }

    @Get('detail/:id')
    findOne(@Param('id') id: string) {
        return this.noteService.findOne(+id);
    }

    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
        return this.noteService.update(+id, updateNoteDto);
    }

    @Post('switch/:newNotebookId')
    switch(@Param('newNotebookId') newNotebookId: string, @Body() switchNoteDto: SwitchNoteDto) {
        return this.noteService.switch(+newNotebookId, switchNoteDto)
    }
}
