import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import User from '../user/entities/user.entity';
import { UpdateLawFirmDto } from './dto/update-law-firm.dto';
import LawFirm from './entities/law-firm.entity';

@Injectable()
export default class LawFirmRepository {
  constructor(private prisma: PrismaService) {}

  async create(lawFirm: LawFirm, user: User) {
    return await this.prisma.lawFirm.create({
      data: {
        name: lawFirm.name,
        UserLawFirm: {
          create: {
            assignedBy: 'root',
            assignedAt: new Date(),
            reference: 'Owner',
            user: {
              create: user,
            },
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.lawFirm.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.lawFirm.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateLawFirmDto: UpdateLawFirmDto) {
    return await this.prisma.lawFirm.update({
      where: { id },
      data: updateLawFirmDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.lawFirm.delete({
      where: {
        id,
      },
    });
  }
}
