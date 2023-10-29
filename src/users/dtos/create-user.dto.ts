import { IsEmail, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsPhoneNumber()
    phoneNumber: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    role: string;
}