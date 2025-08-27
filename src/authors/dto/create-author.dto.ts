import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CreateAuthorDto{
    @IsString()
    @IsNotEmpty()       // pasdan tepaga tekshiradi ushanchun boshligini birinchi tekshirib kegn stringligini tekshirishini yozdim
    full_name: string;

    @IsEmail()
    @IsNotEmpty()
    email:string;
}