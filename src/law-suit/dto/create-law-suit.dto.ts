import { Prisma } from '.prisma/client';

export class CreateLawSuitDto implements Prisma.LawSuitCreateInput {
  user: Prisma.UserCreateNestedOneWithoutProcessInput;
  name: string;
  status: string;
}
