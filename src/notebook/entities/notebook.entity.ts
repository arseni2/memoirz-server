import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {NoteEntity} from "../../note/entities/note.entity";

@Entity('notebook')
export class NotebookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(() => NoteEntity, note => note.notebook)
    notes: NoteEntity[];
}
