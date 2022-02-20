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
  ) {}

  async create(user: CreateUserDTO): Promise<void> {
    const data = this.usersRepository.create(user);
    await this.usersRepository.save(data);
  }

  async searchUser(id: number){
    const user = await this.usersRepository.findOne(id);
    if (!user) return null;
    return user;
  }
}
