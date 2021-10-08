import { Module } from '@nestjs/common';
import { LawSuitService } from './law-suit.service';
import { LawSuitController } from './law-suit.controller';
import { PrismaService } from '../prisma/PrismaService';

@Module({
  controllers: [LawSuitController],
  providers: [LawSuitService, PrismaService],
})
export class LawSuitModule {}
