import { Module } from '@nestjs/common';
import { LawFirmService } from './law-firm.service';
import { LawFirmController } from './law-firm.controller';
import LawFirmRepository from './law-firm.repository';
import { PrismaService } from 'src/prisma/PrismaService';

@Module({
  controllers: [LawFirmController],
  providers: [LawFirmService, LawFirmRepository, PrismaService],
})
export class LawFirmModule {}
