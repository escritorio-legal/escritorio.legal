import { Prisma } from '.prisma/client';
import LawFirm from '../../law-firm/entities/law-firm.entity';

export default class Profile implements Prisma.ProfileUncheckedCreateInput {
  name: string;
  lawFirmId: number;

  constructor(name: string, lawFirmId: number) {
    this.name = name;
    this.lawFirmId = lawFirmId;
  }
}
