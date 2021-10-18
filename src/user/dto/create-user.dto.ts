import { IsNotEmpty } from 'class-validator';
import User from '../entities/user.entity';

export class CreateUserDto extends User {
  name: string;
  email: string;
  phone?: string;

  @IsNotEmpty()
  password: string;
}
