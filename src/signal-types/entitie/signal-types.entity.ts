import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('SignalTypes')
export class Signal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name:'Name' ,type: 'varchar', length: 80})
    Name: string;


}