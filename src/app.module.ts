import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { NotebookModule } from './notebook/notebook.module';
import { NoteModule } from './note/note.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123',
            database: 'memoirz',
            autoLoadEntities: true,
            synchronize: true,
        }),
        NotebookModule,
        NoteModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
