import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiParam } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateUserDTO } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiExcludeEndpoint()
  @Get()
  getHello(): string {
    
    return this.appService.getHello();
  }

  
  @Get('initial')
  async getInitial(): Promise<boolean> {
    return await this.appService.getInitial();
  }

  @Post('initial')
  async setInitial(@Body() user: CreateUserDTO) {
    await this.appService.setInitial(user);
  }
}


