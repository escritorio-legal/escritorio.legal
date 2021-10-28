/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import ProfileRepository from '../profile/profile.repository';
import { AssignProfileDto } from './dto/assignProfile.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';
import UserRepository from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private profileRepository: ProfileRepository,
  ) {}

  async create(data: CreateUserDto) {
    const user = new User(data.name, data.email, data.phone, data.password);
    return await this.userRepository.create(user);
  }

  async findAll() {
    return await this.userRepository.findMany();
  }

  async findOne(id: number) {
    return await this.userRepository.findById(id);
  }

  async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.remove(id);
  }

  async assignProfile(data: AssignProfileDto) {
    const user = await this.userRepository.findById(data.userId);
    const profile = await this.profileRepository.findOne(data.profileId);

    if (!user) {
      throw new Error('User not found!');
    }

    if (!profile) {
      throw new Error('Profile not found!');
    }

    return await this.userRepository.assignProfile(user.id, profile.id);
  }
}
