import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
//Libraries
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async create(user: CreateUserDTO): Promise<void> {
    const { userPassword, ...userData } = user;
    const salt = await bcrypt.genSalt();

    const data = this.usersRepository.create(
      {
        userPassword: await bcrypt.hash(userPassword, salt),
        ...userData
      }
    );
    await this.usersRepository.save(data);
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .getOne();
    if (!user) return null;
    return user;
  }

  async findAdmin(): Promise<boolean> {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.role = :role', { role: 'admin' })
      .getOne();

    if (user) return true;
    return false;
  }

  async get() {
    return await this.usersRepository.query(`
    SELECT surname,
    COUNT(*) as total
    FROM (
        SELECT u.firtsName, u.surname, r.Users_id
        FROM Reports r
        INNER JOIN Users u
        ON r.Users_id = u.id
    ) as ReportsWithUsers
    GROUP BY Users_id
`);
  }
}
