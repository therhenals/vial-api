import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {

  constructor(private usersService: UsersService) { }
  getHello(): string {
    return 'Hello World!';
  }

  async getInitial(): Promise<boolean> {
    return await this.usersService.findAdmin();
  }

  async setInitial(user: CreateUserDTO): Promise<void> {
    const initial = await this.getInitial();
    if (initial) {
     new UnauthorizedException();
    } else {
      return await this.usersService.create(user);
    }
  }
}
