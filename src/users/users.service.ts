import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './shcemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(
    email: string,
    password: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    role: string,
  ) {
    const newUser = new this.userModel({
      email,
      password,
      phoneNumber,
      firstName,
      lastName,
      role,
    });
    return await newUser.save();
  }

  async findOneUser(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async findAllUsers() {
    const users = await this.userModel.find();
    return users;
  }

  async updateUser(id: string, data: Partial<User>) {
    const foundedUser = await this.findOneUser(id);
    if (data.email) {
      foundedUser.email = data.email;
    }
    if (data.firstName) {
      foundedUser.firstName = data.firstName;
    }
    if (data.lastName) {
      foundedUser.lastName = data.lastName;
    }
    if (data.phoneNumber) {
      foundedUser.phoneNumber = data.phoneNumber;
    }
    foundedUser.save();
  }

  async deleteUser(id: string) {
    await this.userModel.deleteOne({_id: id})
  }
}
