import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FirebaseAuthService } from 'src/firebase/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { LoginResponse } from './classes/login.class';
import { LoginDTO } from './dto/login.dto';

//Libraries
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private firebaseAuthService: FirebaseAuthService,
    ) { }

    async validate(username: string, password: string) {
        const user = await this.usersService.findByUsername(username);
        if (await bcrypt.compare(password, user.userPassword)) {
            return user;
        }
    }

    async login(loginDTO: LoginDTO): Promise<LoginResponse> {
        const user = await this.validate(loginDTO.username, loginDTO.password);
        if (user) {
            console.log(user.id);
            const token = await this.firebaseAuthService.generateToken(
                String(user.id),
                {
                    role: user.role
                },
            );
            return { token };
        } else {
            new UnauthorizedException();
        }
    }
}
