import 'reflect-metadata';

import { provide, inject } from '../IOC';
import { Types } from '../Types';

import { Result } from '../domain/Result';
import { User } from '../domain/model/User';
import { UserRepository } from '../domain/repository/UserRepository';

@provide(Types.GetUser)
export class GetUser {
  
  @inject(Types.UserRepository)
  private userRespository: UserRepository;
  
  async execute (userId: string): Promise<Result<User>> {
    let result = await this.userRespository.getUser(userId);
    return result;
  }
}
