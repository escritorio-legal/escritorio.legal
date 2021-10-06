import { Module } from '@nestjs/common';
import { LawFirmService } from './law-firm.service';
import { LawFirmController } from './law-firm.controller';
import { PrismaService } from 'src/prisma/PrismaService';

@Module({
  controllers: [LawFirmController],
  providers: [LawFirmService, PrismaService],
})
export class LawFirmModule {}
