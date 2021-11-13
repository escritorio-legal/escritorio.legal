import { Prisma } from '.prisma/client';

export default class Profile implements Prisma.ProfileUncheckedCreateInput {
  id: number;
  name: string;
  lawFirmId: number;

  constructor(name: string, lawFirmId: number) {
    this.name = name;
    this.lawFirmId = lawFirmId;
  }
}
