import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, NotEquals } from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}