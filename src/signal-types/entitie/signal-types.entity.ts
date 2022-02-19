import { Reports } from "src/reports/entitie/reports.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

@Entity('SignalTypes')
export class Signal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name:'Name' ,type: 'varchar', length: 80})
    Name: string;
   

    @OneToOne(() => Reports,report => report.signalTypes, {cascade:true})
    signalT:Reports;


}