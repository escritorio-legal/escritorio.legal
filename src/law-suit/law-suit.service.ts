import { Injectable } from '@nestjs/common';
import UserRepository from '../user/user.repository';
import { CreateLawSuitDto } from './dto/create-law-suit.dto';
import { UpdateLawSuitDto } from './dto/update-law-suit.dto';
import { LawSuit } from './entities/law-suit.entity';
import { LawSuitRepository } from './law-suit.repository';

@Injectable()
export class LawSuitService {
  constructor(
    private lawSuitRepository: LawSuitRepository,
    private userRepository: UserRepository,
  ) {}

  async create(createLawSuitDto: CreateLawSuitDto) {
    const { name, status } = createLawSuitDto;
    const user = await this.userRepository.findById(createLawSuitDto.userId);
    const lawSuit = new LawSuit(name, status, user.id);
    return await this.lawSuitRepository.create(lawSuit);
  }

  async findAll() {
    return await this.lawSuitRepository.findAll();
  }

  async findById(id: number) {
    return await this.lawSuitRepository.findById(id);
  }

  async update(id: number, updateLawSuitDto: UpdateLawSuitDto) {
    const { name, status, userId } = updateLawSuitDto;
    const lawSuit = new LawSuit(name, status, userId);
    return await this.lawSuitRepository.update(id, lawSuit);
  }

  async remove(id: number) {
    return await this.lawSuitRepository.remove(id);
  }
}
