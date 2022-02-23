import { User } from 'src/users/entities/user.entity';
import { Signal } from 'src/signal-types/entities/signal-type.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Conservation } from './conservation.entity';
import { Visibility } from './visibility.entity';


@Entity('Reports')
export class Report {
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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'Users_id' })
  user: User;

  @OneToOne(() => Signal)
  @JoinColumn({ name: 'SignalTypes_id' })
  signalType: Signal;

  @OneToOne(() => Visibility)
  @JoinColumn({ name: ' Visibilities_id' })
  visibility: Visibility;

  @OneToOne(() => Conservation)
  @JoinColumn({ name: 'Conservations_id' })
  conservation: Conservation;
}