import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../user/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}
  async signIn(email: string, password: string) {
    const user = await this.userService.findOneUserByEmail(email);
    
    if (user.password !== password) {
      throw new ForbiddenException('User not found');
    }
    return 'signed up';
  }
}
