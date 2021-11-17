import { Injectable } from '@nestjs/common';
import ProfileRepository from 'src/profile/profile.repository';
import { CreateManyPermissionDto } from './dto/create-many-permission.dto';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';
import PermissionRepository from './permission.repository';

@Injectable()
export class PermissionService {
  constructor(
    private permissionRepository: PermissionRepository,
    private profileRepository: ProfileRepository,
  ) {}

  async create(createPermissionDto: CreatePermissionDto) {
    const { profileId, namespace } = createPermissionDto;
    const profile = await this.profileRepository.findOne(profileId);
    const permission = new Permission(profile, namespace);
    return await this.permissionRepository.create(permission);
  }

  async createMany(createManyPermissionDto: CreateManyPermissionDto) {
    const { profileId, permissions } = createManyPermissionDto;
    const profile = await this.profileRepository.findOne(profileId);
    const permissionList = [];
    permissions.forEach((permission) => {
      permissionList.push(new Permission(profile, permission.namespace));
    });
    return permissionList;
    //return await this.permissionRepository.createMany(this.permissionsList);
  }

  findAll() {
    return `This action returns all permission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
