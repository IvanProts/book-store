import { IsEmail, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class UpdateUserDto {
    @IsPhoneNumber()
    @IsOptional()
    phoneNumber: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsStrongPassword()
    @IsOptional()
    password: string;

    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsString()
    @IsOptional()
    role: string;
}