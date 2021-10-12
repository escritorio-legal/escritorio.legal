import { Module } from '@nestjs/common';
import { LawFirmService } from './law-firm.service';
import { LawFirmController } from './law-firm.controller';
import LawFirmRepository from './law-firm.repository';
import { PrismaService } from '../prisma/PrismaService';
import ProfileRepository from '../profile/profile.repository';

@Module({
  controllers: [LawFirmController],
  providers: [
    LawFirmService,
    LawFirmRepository,
    ProfileRepository,
    PrismaService,
  ],
})
export class LawFirmModule {}
