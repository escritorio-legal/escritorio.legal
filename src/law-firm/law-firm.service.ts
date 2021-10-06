import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/PrismaService';
import Profile from 'src/profile/entities/profile.entity';
import User from 'src/user/entities/user.entity';
import CreateLawfirmDto from './dto/create-law-firm.dto';
import { UpdateLawFirmDto } from './dto/update-law-firm.dto';
import LawFirm from './entities/law-firm.entity';

@Injectable()
export class LawFirmService {
  constructor(private prisma: PrismaService) {}

  async create(createLawfirmDto: CreateLawfirmDto) {
    const user = new User(
      createLawfirmDto.user.name,
      createLawfirmDto.user.email,
      createLawfirmDto.user.phone,
      createLawfirmDto.user.password,
    );

    const lawFirmObj = new LawFirm(createLawfirmDto.name);

    const profiles = [
      new Profile('Secretary', lawFirmObj),
      new Profile('Intern', lawFirmObj),
    ];

    const lawFirm = await this.prisma.lawFirm.create({
      data: {
        name: lawFirmObj.name,
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

    return { lawFirm };
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
