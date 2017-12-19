import { Result } from '../Result';
import { User } from '../model/User';

export interface UserRepository {
  getUser (id: string): Promise<Result<User>>
  saveUser (user: User): Promise<Result<void>>
}
