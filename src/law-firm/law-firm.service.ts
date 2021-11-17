import { Injectable } from '@nestjs/common';
import Profile from '../profile/entities/profile.entity';
import ProfileRepository from '../profile/profile.repository';
import User from '../user/entities/user.entity';
import CreateLawfirmDto from './dto/create-law-firm.dto';
import { UpdateLawFirmDto } from './dto/update-law-firm.dto';
import LawFirm from './entities/law-firm.entity';
import LawFirmRepository from './law-firm.repository';

@Injectable()
export class LawFirmService {
  constructor(
    private repository: LawFirmRepository,
    private profileRepository: ProfileRepository,
  ) {}

  async create(createLawfirmDto: CreateLawfirmDto) {
    const { name, user } = createLawfirmDto;
    const userObj = new User(user.name, user.email, user.phone, user.password);
    const lawFirmObj = new LawFirm(name);
    const lawFirm = await this.repository.create(lawFirmObj, userObj);
    const profiles = [
      new Profile('Secretary', lawFirm.id),
      new Profile('Inter', lawFirm.id),
    ];
    await this.profileRepository.createMany(profiles);
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
