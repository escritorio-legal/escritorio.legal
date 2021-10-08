import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import CreateProfileDto from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    return await this.prisma.profile.create({ data: createProfileDto });
  }

  async findAll() {
    return await this.prisma.profile.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.profile.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    return await this.prisma.profile.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.profile.delete({ where: { id } });
  }
}
