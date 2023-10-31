import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UsersService } from '../user/users.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signIn(email: string, password: string) {
    const user = await this.userService.findOneUserByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Password is incorrect!');
    }
    return user;
  }
  async signUp (email: string, userPassword: string, phoneNumber: string, firstName: string, lastName: string, role: string) {
    const users = await this.userService.findOneUserByEmail(email);
    if (users) {
      throw new BadRequestException('Email is in use');
    }
    const salt = randomBytes(8).toString('hex');    
    const hash = (await scrypt(userPassword, salt, 32)) as Buffer;
    const password = salt + '.' + hash.toString('hex');
    const user = await this.userService.createUser(email, password, phoneNumber, firstName, lastName, role);
    return user;
  }
}
