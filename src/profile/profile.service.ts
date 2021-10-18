import { Injectable } from '@nestjs/common';
import LawFirmRepository from '../law-firm/law-firm.repository';
import createProfileDto from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import Profile from './entities/profile.entity';
import ProfileRepository from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(private profileRepository: ProfileRepository) {}

  async create(createProfileDto: createProfileDto) {
    const profile = new Profile(
      createProfileDto.name,
      createProfileDto.lawFirmId,
    );
    return await this.profileRepository.create(profile);
  }

  findAll() {
    return this.profileRepository.findAll();
  }

  findById(id: number) {
    return this.profileRepository.findById(+id);
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    const profile = new Profile(
      updateProfileDto.name,
      updateProfileDto.lawFirmId,
    );
    return await this.profileRepository.update(id, profile);
  }

  async remove(id: number) {
    return await this.profileRepository.remove(id);
  }
}
