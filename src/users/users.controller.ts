import {
  Body,
  Controller,
  Delete,
  Get,
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
    return await this.userService.findOneUser(id);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return await this.userService.updateUser(id, body);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
