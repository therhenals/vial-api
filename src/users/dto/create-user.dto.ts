import { IsDate,IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  firtsName: string;
  @IsString()
  secoundName: string;
  @IsString()
  surname: string;
  @IsString()
  secoundSurname: string;
  @IsString()
  username: string;
  @IsString()
  userPassword: string;
  @IsString()
  role: string;
  @IsDate()
  creationDate: Date;
}
