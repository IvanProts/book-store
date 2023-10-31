import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/sign-up')
  signUp(@Body() body: AuthDto) {
    return this.authService.signIn(body.email, body.password);
  }

  @Post()
  signIn() {}
}
