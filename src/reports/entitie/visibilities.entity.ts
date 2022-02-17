import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";


@Entity('Visibilities')
export class  Visibilities{

    @PrimaryGeneratedColumn()
    id:number;

    
    @Column({name: 'adequate',type: 'bool',nullable:false})
    adequate:boolean;

    @Column({name: 'vegetation',type: 'bool',nullable:false})
    vegetation:boolean;

    @Column({name: 'color',type: 'bool',nullable:false})
    color:boolean;

    @Column({name: 'energyPost',type: 'bool',nullable:false})
    energyPost:boolean;
    
    
}