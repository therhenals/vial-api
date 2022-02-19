import { Users } from 'src/users/entities/users.entity';
import { Signal } from 'src/signal-types/entitie/signal-types.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Conservations } from './conservations.entity';
import { Visibilities } from './visibilities.entity';


@Entity('Reports')
export class Reports {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'lat', type: 'varchar', length: 250, nullable: false })
  lat: string;

  @Column({ name: 'lng', type: 'varchar', length: 250, nullable: false })
  lng: string;

  @Column({ name: 'urlPhoto', type: 'varchar', length: 250, nullable: false })
  urlPhoto: string;

  @CreateDateColumn({ name: 'creationDate', type: 'timestamp', nullable: false })
  creationDate: Date;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'Users_id' })
  users: Users;

  @OneToOne(() => Signal)
  @JoinColumn({ name: 'SignalTypes_id' })
  signalTypes: Signal;

  @OneToOne(() => Visibilities)
  @JoinColumn({ name: ' Visibilities_id' })
  visibilities: Visibilities;

  @OneToOne(() => Conservations)
  @JoinColumn({ name: 'Conservations_id' })
  conservations: Conservations;
}