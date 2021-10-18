import { Module } from '@nestjs/common';
import { LawSuitService } from './law-suit.service';
import { LawSuitController } from './law-suit.controller';
import { PrismaService } from '../prisma/PrismaService';
import { LawSuitRepository } from './law-suit.repository';
import UserRepository from '../user/user.repository';

@Module({
  controllers: [LawSuitController],
  providers: [LawSuitService, PrismaService, LawSuitRepository, UserRepository],
})
export class LawSuitModule {}
