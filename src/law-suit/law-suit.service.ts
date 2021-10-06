import { Injectable } from '@nestjs/common';
import { CreateLawSuitDto } from './dto/create-law-suit.dto';
import { UpdateLawSuitDto } from './dto/update-law-suit.dto';

@Injectable()
export class LawSuitService {
  create(createLawSuitDto: CreateLawSuitDto) {
    return 'This action adds a new lawSuit';
  }

  findAll() {
    return `This action returns all lawSuit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lawSuit`;
  }

  update(id: number, updateLawSuitDto: UpdateLawSuitDto) {
    return `This action updates a #${id} lawSuit`;
  }

  remove(id: number) {
    return `This action removes a #${id} lawSuit`;
  }
}
