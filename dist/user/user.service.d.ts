import { PrismaService } from 'src/prisma/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: CreateUserDto): Promise<User>;
    findAll(): Promise<import(".prisma/client").User[]>;
    findOne(id: number): Promise<import(".prisma/client").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: number): Promise<import(".prisma/client").User>;
}
