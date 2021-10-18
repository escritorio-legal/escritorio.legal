import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import { LawSuit } from './entities/law-suit.entity';

@Injectable()
export class LawSuitRepository {
  constructor(private prisma: PrismaService) {}

  async create(lawSuit: LawSuit) {
    return await this.prisma.lawSuit.create({ data: lawSuit });
  }

  async findAll() {
    return await this.prisma.lawSuit.findMany();
  }

  async findById(id: number) {
    return await this.prisma.lawSuit.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, lawSuit: LawSuit) {
    return await this.prisma.lawSuit.update({
      where: { id },
      data: lawSuit,
    });
  }

  async remove(id: number) {
    return await this.prisma.lawSuit.delete({
      where: { id },
    });
  }
}
