import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('SignalTypes')
export class Signal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 80 })
    name: string;
}