import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {NotebookService} from './notebook.service';
import {CreateNotebookDto} from './dto/create-notebook.dto';
import {UpdateNotebookDto} from './dto/update-notebook.dto';

@Controller('notebook')
export class NotebookController {
    constructor(private readonly notebookService: NotebookService) {
    }

    @Post('create')
    create(@Body() createNotebookDto: CreateNotebookDto) {
        return this.notebookService.create(createNotebookDto);
    }

    @Get('all')
    findAll() {
        return this.notebookService.findAll();
    }

    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updateNotebookDto: UpdateNotebookDto) {
        return this.notebookService.update(+id, updateNotebookDto);
    }
}
