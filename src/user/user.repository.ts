import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';

@Injectable()
export default class UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User) {
    return await this.prisma.user.create({ data: user });
  }

  async findMany() {
    return this.prisma.user.findMany();
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async update(id: number, updateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: UpdateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
