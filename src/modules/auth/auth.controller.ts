import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signin')
  signin(@Body() body: SignInDto) {
    return this.authService.signIn(body.email, body.password);
  }

  @Post('/signup')
  signup(@Body() body: CreateUserDto) {
    return this.authService.signUp(
      body.email,
      body.password,
      body.phoneNumber,
      body.firstName,
      body.lastName,
      body.role,
    );
  }
}
