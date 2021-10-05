import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import User from 'src/user/entities/user.entity';
import userEntity from 'src/user/entities/user.entity';
import UserRepository from 'src/user/user-repository';
export default class UserRepositoryPrisma implements UserRepository {
    private prisma;
    private userRepository;
    constructor(prisma: PrismaService, userRepository: UserRepository);
    save(user: Prisma.UserCreateInput): Promise<User>;
    getById(id: string): Promise<userEntity>;
}
