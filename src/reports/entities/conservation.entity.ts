import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Conservations')
export class Conservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'clean', type: 'bool', nullable: false })
    clean: boolean;

    @Column({ name: 'scratched', type: 'bool', nullable: false })
    scratched: boolean;

    @Column({ name: 'foldedBoard', type: 'bool', nullable: false })
    foldedBoard: boolean;

    @Column({ name: 'bentPost', type: 'bool', nullable: false })
    bentPost: boolean;
}