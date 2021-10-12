import { Profile } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';

@Injectable()
export default class ProfileRepository {
  constructor(private prisma: PrismaService) {}

  async createMany(profiles: Profile[]) {
    return await this.prisma.profile.createMany({
      data: profiles,
    });
  }
}
