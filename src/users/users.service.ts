import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { Users } from './entities/users.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) { }

  async create(user: CreateUserDTO): Promise<void> {
    const data = this.usersRepository.create(user);
    await this.usersRepository.save(data);
  }

  async findByUsername(username: string) {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .getOne();
    if (!user) return null;
    return user;
  }
}
