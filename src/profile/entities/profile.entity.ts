import { Prisma } from '.prisma/client';
import LawFirm from '../../law-firm/entities/law-firm.entity';

export default class Profile implements Prisma.ProfileCreateInput {
  name: string;
  id: number;
  lawFirm: LawFirm;
  LawFirm: Prisma.LawFirmCreateNestedOneWithoutProfilesInput;
  UserProfile?: Prisma.UserProfileCreateNestedManyWithoutProfileInput;
  lawFirmId: number;

  constructor(name: string, lawFirm: number) {
    this.name = name;
    this.lawFirmId = lawFirm;
  }
}
