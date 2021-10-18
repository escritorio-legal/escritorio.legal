import { Prisma } from '.prisma/client';
import { genSaltSync, hashSync } from 'bcryptjs';

export default class User implements Prisma.UserCreateInput {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;

  constructor(name: string, email: string, phone: string, password: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = this.hashPassword(password);
  }

  private hashPassword(password: string) {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }
}
