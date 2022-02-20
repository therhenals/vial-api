import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private signalTypesService: UsersService) {}

  @Post('create')
  async create(@Body() user: CreateUserDTO): Promise<void> {
    return await this.signalTypesService.create(user);
  }
}
