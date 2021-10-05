import User from './entities/user.entity';

export default interface UserRepository {
  save(user: any): Promise<number | undefined>;
  getById(id: string): Promise<User | undefined>;
}
