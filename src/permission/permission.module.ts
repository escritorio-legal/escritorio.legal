import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import PermissionRepository from './permission.repository';
import { PrismaService } from 'src/prisma/PrismaService';
import ProfileRepository from 'src/profile/profile.repository';

@Module({
  controllers: [PermissionController],
  providers: [PrismaService, PermissionService, PermissionRepository, ProfileRepository]
})
export class PermissionModule {}
