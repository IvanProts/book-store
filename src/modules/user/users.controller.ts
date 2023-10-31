import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.createUser(
      body.email,
      body.password,
      body.phoneNumber,
      body.firstName,
      body.lastName,
      body.role,
    );
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.findOneUser(id);
    if (!user) throw new NotFoundException('User not found')
    return user;
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.findAllUsers();
    if (!users.length) throw new NotFoundException('Users not found')
    return users;
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.updateUser(id, body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
