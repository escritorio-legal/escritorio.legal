import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/PrismaService';
import Profile from 'src/profile/entities/profile.entity';
import User from 'src/user/entities/user.entity';
import { UpdateLawFirmDto } from './dto/update-law-firm.dto';
import LawFirm from './entities/law-firm.entity';

@Injectable()
export default class LawFirmRepository {
  lawFirm: LawFirm;
  user: User;
  profiles: Profile[];

  constructor(private prisma: PrismaService) {}

  async create(lawFirm: LawFirm, user: User, profiles?: Profile[]) {
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
        profiles: {
          create: [
            {
              name: profiles[0].name,
            },
            {
              name: profiles[1].name,
            },
          ],
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
