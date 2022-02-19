import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'firtsName', type: 'varchar', length: 80, nullable: false })
    firtsName: string;

    @Column({ name: 'secoundName', type: 'varchar', length: 80 })
    secoundName: string;

    @Column({ name: 'surname', type: 'varchar', length: 80, nullable: false })
    surname: string;

    @Column({ name: 'secoundSurname', type: 'varchar', length: 80, nullable: false })
    secoundSurname: string;

    @Column({ name: 'username', type: 'varchar', length: 80, nullable: false })
    username: string

    @Column({ name: 'userPassword', type: 'varchar', length: 500, nullable: false })
    userPassword: string;

    @Column({ name: 'role', type: 'varchar', length: 100, nullable: false })
    role: string;

    @CreateDateColumn({ name: 'creationDate', type: 'timestamp', nullable: false })
    creationDate: Date;
}