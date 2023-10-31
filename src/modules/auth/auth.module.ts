import { Module } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [],
    controllers: []
})
export class AuthModule {};
