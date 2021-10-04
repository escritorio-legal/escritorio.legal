import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
