import { Prisma } from '.prisma/client';

export class LawSuit implements Prisma.LawSuitCreateInput {
  name: string;
  status: string;
  userId: number;
  user: Prisma.UserCreateNestedOneWithoutLawSuitInput;

  constructor(name: string, status: string, userId: number) {
    this.name = name;
    this.status = status;
    this.userId = userId;
  }
}
