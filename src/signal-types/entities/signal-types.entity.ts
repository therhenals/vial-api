import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity('SignalTypes')
export class Signal {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'name', type: 'varchar', length: 80 })
    name: string;
}