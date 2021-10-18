import { Prisma } from '.prisma/client';

export default class LawFirm implements Prisma.LawFirmUncheckedCreateInput {
  id?: number;
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
