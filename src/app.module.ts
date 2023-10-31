import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/user/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ivanprotss:Qwe123@bookstore.aqtncuj.mongodb.net/book-store-testing?retryWrites=true&w=majority',
    ),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
