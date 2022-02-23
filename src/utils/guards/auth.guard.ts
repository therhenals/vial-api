import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { FirebaseAuthService } from 'src/firebase/auth/auth.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private reflector: Reflector,
  ) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.replace('Bearer ', '');
    if (!token) {
      return false;
    }
    const result = await this.firebaseAuthService.verifyToken(token);
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (result) {
      if (roles) {
        if (roles.includes(result.role)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
