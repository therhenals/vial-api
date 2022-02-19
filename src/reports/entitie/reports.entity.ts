import { Users } from "src/auth/entitie/user.entity";
import { Signal } from "src/signal-types/entitie/signal-types.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conservations } from "./conservations.entity";
import { Visibilities } from "./visibilities.entity";


@Entity('Reports')
export class  Reports{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name: 'Lat',type: 'varchar', length:250,nullable:false})
    Lat:string;

    @Column({name: 'Lng',type: 'varchar', length:250,nullable:false})
    Lng:string;

    @Column({name: 'urlPotho',type: 'varchar', length:250,nullable:false})
    urlPotho:string;
    
    @CreateDateColumn({name: 'creationDate',type:'timestamp',nullable:false})
    creationDate:Date;


    @ManyToOne(
        () => Users,
         users => users.user,
         { eager: true },
       )
       @JoinColumn({ name: 'Users_id' })
       users: Users;
       

       @OneToOne(() => Signal, signal => signal.signalT)
       @JoinColumn({ name: 'SignalTypes_id' })
       signalTypes:Signal;

       @OneToOne(() => Visibilities, visibilities => visibilities.vis)
       @JoinColumn({ name: ' Visibilities_id' })
       visibilities:Visibilities;

       @OneToOne(() => Conservations, conservations => conservations.con)
       @JoinColumn({ name: 'Conservations_id' })
       conservations:Conservations;
}