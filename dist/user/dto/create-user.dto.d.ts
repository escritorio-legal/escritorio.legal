import { Prisma } from '.prisma/client';
export declare class CreateUserDto implements Prisma.UserCreateInput {
    name: string;
    email: string;
    password: string;
    phone?: string;
}
