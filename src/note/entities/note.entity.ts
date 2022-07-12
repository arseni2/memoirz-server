import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {NotebookEntity} from "../../notebook/entities/notebook.entity";


@Entity('note')
export class NoteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({type: 'jsonb', select: false})
    body: string;

    @ManyToOne(() => NotebookEntity, notebook => notebook.notes, {onDelete: 'CASCADE'})
    notebook: NotebookEntity;
}