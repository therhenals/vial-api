import { Body, Controller, Get, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/utils/guards/auth.guard';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@ApiBasicAuth('firebase')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @UseGuards(AuthGuard)
  @SetMetadata('roles', ['admin'])
  @Post('create')
  async create(@Body() user: CreateUserDTO): Promise<void> {
    return await this.usersService.create(user);
  }

  
  @Get()
  async get() {
   return await this.usersService.get();
  }
}
