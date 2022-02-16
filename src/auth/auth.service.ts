import { Injectable } from '@nestjs/common';
import { LoginResponse } from './classes/login.class';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {

    async login(loginDTO: LoginDTO) : Promise<LoginResponse> {
         // Luis Rhenals
        return {
            token: ''
        };
    }
}
