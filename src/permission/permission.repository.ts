import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import { Permission } from './entities/permission.entity';

@Injectable()
export default class PermissionRepository {
  constructor(private prisma: PrismaService) {}
  async create(permission: Permission) {
    return await this.prisma.permission.create({ 
      data: {
        namespace: permission.namespace,
        profileId: permission.profile.id
      } 
    });
  }

  async createMany(permissions: Array<Permission>) {
    return await this.prisma.permission.createMany({ data: permissions });
  }

  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne() {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
  remove() {
    throw new Error('Method not implemented.');
  }
}
