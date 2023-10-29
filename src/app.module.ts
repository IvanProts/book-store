import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ivanprotss:Qwe123@bookstore.aqtncuj.mongodb.net/book-store-testing?retryWrites=true&w=majority'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
