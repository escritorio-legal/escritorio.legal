import { Prisma } from '.prisma/client';

export default class LawFirm implements Prisma.LawFirmCreateInput {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
