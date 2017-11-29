import { Result } from '../domain/Result';
import { User } from '../domain/model/User';
import { UserRepository } from '../domain/repository/UserRepository';

export class GetUser {
  
  userRespository: UserRepository;
  
  constructor (userRespository: UserRepository) {
    this.userRespository = userRespository;
  }
  
  async execute (id: string): Promise<Result<User>> {
    let result = await this.userRespository.getUser(id);
    return result;
  }
}