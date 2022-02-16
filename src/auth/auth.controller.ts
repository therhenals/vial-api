import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginResponse } from './classes/login.class';
import { LoginDTO } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}
    
    @Post('login')
    async login(@Body() loginDTO: LoginDTO) : Promise<LoginResponse> {
        return await this.authService.login(loginDTO);
    }
}
