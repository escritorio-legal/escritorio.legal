import { Prisma } from '.prisma/client';

export class LawSuit implements Prisma.LawSuitUncheckedCreateInput {
  name: string;
  status: string;
  userId: number;

  constructor(name: string, status: string, userId: number) {
    this.name = name;
    this.status = status;
    this.userId = userId;
  }
}
