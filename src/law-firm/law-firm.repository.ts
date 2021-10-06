import { PrismaService } from 'src/prisma/PrismaService';
import Profile from 'src/profile/entities/profile.entity';
import User from 'src/user/entities/user.entity';
import LawFirm from './entities/law-firm.entity';

export default class LawFirmRepository {
  lawFirm: LawFirm;
  user: User;
  profiles: Profile[];

  constructor(
    private prisma: PrismaService,
    lawFirm: LawFirm,
    user: User,
    profiles?: Profile[],
  ) {
    this.lawFirm = lawFirm;
    this.user = user;
    this.profiles = profiles;
  }

  async create() {
    return await this.prisma.lawFirm.create({
      data: {
        name: this.lawFirm.name,
        UserLawFirm: {
          create: {
            assignedBy: 'root',
            assignedAt: new Date(),
            reference: 'Owner',
            user: {
              create: this.user,
            },
          },
        },
        profiles: {
          create: [
            {
              name: this.profiles[0].name,
            },
            {
              name: this.profiles[1].name,
            },
          ],
        },
      },
    });
  }
}
