import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    phoneNumber: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);