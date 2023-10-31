import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, NotEquals } from "class-validator";

export class SignInDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}