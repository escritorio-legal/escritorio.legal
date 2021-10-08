import { Injectable } from '@nestjs/common';
import Profile from '../profile/entities/profile.entity';
import User from '../user/entities/user.entity';
import CreateLawfirmDto from './dto/create-law-firm.dto';
import { UpdateLawFirmDto } from './dto/update-law-firm.dto';
import LawFirm from './entities/law-firm.entity';
import LawFirmRepository from './law-firm.repository';

@Injectable()
export class LawFirmService {
  constructor(private repository: LawFirmRepository) {}

  async create(createLawfirmDto: CreateLawfirmDto) {
    const user = new User(
      createLawfirmDto.user.name,
      createLawfirmDto.user.email,
      createLawfirmDto.user.phone,
      createLawfirmDto.user.password,
    );

    const lawFirmObj = new LawFirm(createLawfirmDto.name);

    const profiles = [
      new Profile('Secretary', lawFirmObj),
      new Profile('Intern', lawFirmObj),
    ];

    const lawFirm = await this.repository.create(lawFirmObj, user, profiles);
    return { lawFirm };
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateLawFirmDto: UpdateLawFirmDto) {
    return await this.repository.update(id, updateLawFirmDto);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
