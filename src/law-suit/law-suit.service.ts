import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';
import { CreateLawSuitDto } from './dto/create-law-suit.dto';
import { UpdateLawSuitDto } from './dto/update-law-suit.dto';

@Injectable()
export class LawSuitService {
  constructor(private prisma: PrismaService) {}

  async create(CreateLawSuitDto: CreateLawSuitDto) {
    return await this.prisma.lawSuit.create({ data: CreateLawSuitDto });
  }

  async findAll() {
    return await this.prisma.lawSuit.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.lawSuit.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, UpdateLawSuitDto: UpdateLawSuitDto) {
    return await this.prisma.lawSuit.update({
      where: { id },
      data: UpdateLawSuitDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.lawSuit.delete({
      where: { id },
    });
  }
}
