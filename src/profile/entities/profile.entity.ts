import { Prisma } from '.prisma/client';
import LawFirm from '../../law-firm/entities/law-firm.entity';

export default class Profile implements Prisma.ProfileCreateInput {
  name: string;
  lawFirm: LawFirm;
  LawFirm: Prisma.LawFirmCreateNestedOneWithoutProfilesInput;
  UserProfile?: Prisma.UserProfileCreateNestedManyWithoutProfileInput;

  constructor(name: string, lawFirm: LawFirm) {
    this.name = name;
    this.lawFirm = lawFirm;
  }
}
