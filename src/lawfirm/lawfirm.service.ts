import { Injectable } from '@nestjs/common';
import { CreateLawfirmDto } from './dto/create-lawfirm.dto';
import { UpdateLawfirmDto } from './dto/update-lawfirm.dto';

@Injectable()
export class LawfirmService {
  create(createLawfirmDto: CreateLawfirmDto) {
    return 'This action adds a new lawfirm';
  }

  findAll() {
    return `This action returns all lawfirm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lawfirm`;
  }

  update(id: number, updateLawfirmDto: UpdateLawfirmDto) {
    return `This action updates a #${id} lawfirm`;
  }

  remove(id: number) {
    return `This action removes a #${id} lawfirm`;
  }
}
