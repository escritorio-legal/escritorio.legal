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

    const lawFirm = new LawFirm(createLawfirmDto.name);

    const profiles = [
      new Profile('Secretary', lawFirm),
      new Profile('Intern', lawFirm),
    ];

    const created = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
        UserLawFirm: {
          create: [
            {
              assignedBy: 'Root',
              assignedAt: new Date(),
              reference: 'Owner',
              lawFirm: {
                create: {
                  name: lawFirm.name,
                },
              },
            },
          ],
        },
      },
    });

    return { created };
  }

  findAll() {
    return `This action returns all lawFirm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lawFirm`;
  }

  update(id: number, updateLawFirmDto: UpdateLawFirmDto) {
    return `This action updates a #${id} lawFirm`;
  }

  remove(id: number) {
    return `This action removes a #${id} lawFirm`;
  }
}
