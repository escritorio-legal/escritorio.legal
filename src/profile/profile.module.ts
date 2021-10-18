import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PrismaService } from '../prisma/PrismaService';
import ProfileRepository from './profile.repository';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, PrismaService, ProfileRepository],
})
export class ProfileModule {}
