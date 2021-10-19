import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import Profile from './entities/profile.entity';

@Injectable()
export default class ProfileRepository {
  constructor(private prisma: PrismaService) {}

  async create(profile: Profile) {
    return await this.prisma.profile.create({
      data: profile,
    });
  }

  async createMany(profiles: Profile[]) {
    return await this.prisma.profile.createMany({
      data: profiles,
    });
  }

  async findAll() {
    return await this.prisma.profile.findMany();
  }

  async findById(id: number) {
    await this.prisma.profile.findUnique({
      where: { id },
    });
  }

  async update(id: number, profile: Profile) {
    return await this.prisma.profile.update({
      where: { id },
      data: profile,
    });
  }

  async remove(id: number) {
    return await this.prisma.profile.delete({
      where: {
        id,
      },
    });
  }
}
