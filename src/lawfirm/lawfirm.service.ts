import { Injectable } from '@nestjs/common';
import Profile from 'src/profile/entities/profile.entity';
import User from 'src/user/entities/user.entity';
import { CreateLawfirmDto } from './dto/create-lawfirm.dto';
import { UpdateLawfirmDto } from './dto/update-lawfirm.dto';
import LawFirm from './entities/lawfirm.entity';

@Injectable()
export class LawfirmService {
  create(createLawfirmDto: CreateLawfirmDto) {
    const user = new User(
      createLawfirmDto.user.name,
      createLawfirmDto.user.email,
      createLawfirmDto.user.phone,
      createLawfirmDto.user.password,
    );

    const lawFirm = new LawFirm(createLawfirmDto.name);

    const profiles = [
      new Profile('Secretary', lawFirm),
      new Profile('Intern', lawFirm),
    ];

    return { user, lawFirm, profiles };
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
