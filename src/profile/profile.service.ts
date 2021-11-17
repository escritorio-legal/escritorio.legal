import { Injectable } from '@nestjs/common';
import createProfileDto from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import Profile from './entities/profile.entity';
import ProfileRepository from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(private profileRepository: ProfileRepository) {}

  async create(createProfileDto: createProfileDto) {
    const { name, lawFirmId } = createProfileDto;
    const profile = new Profile(name, lawFirmId);
    return await this.profileRepository.create(profile);
  }

  findAll() {
    return this.profileRepository.findAll();
  }

  findById(id: number) {
    return this.profileRepository.findOne(+id);
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    const { name, lawFirmId } = updateProfileDto;
    const profile = new Profile(name, lawFirmId);
    return await this.profileRepository.update(id, profile);
  }

  async remove(id: number) {
    return await this.profileRepository.remove(id);
  }
}
