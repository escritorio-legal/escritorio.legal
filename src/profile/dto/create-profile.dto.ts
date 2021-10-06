import { Prisma } from '.prisma/client';

export default class createProfileDto implements Prisma.ProfileCreateInput {
  name: string;
  LawFirm: Prisma.LawFirmCreateNestedOneWithoutProfilesInput;
  UserProfile?: Prisma.UserProfileCreateNestedManyWithoutProfileInput;
}
