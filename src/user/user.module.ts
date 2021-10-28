import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma/PrismaService';
import UserRepository from './user.repository';
import ProfileRepository from '../profile/profile.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepository, ProfileRepository],
  exports: [UserService],
})
export class UserModule {}
