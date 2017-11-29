import { Result } from '../domain/Result';
import { MongoExecutor } from '../datasource/mongoose/MongoExecutor';
import { UserMapper } from '../datasource/mongoose/mapper/UserMapper';
import { UserRepository } from '../domain/repository/UserRepository';
import { User } from '../domain/model/User';
import { UserDb } from '../datasource/mongoose/UserDb';

export class UserDataSource implements UserRepository {
  getUser (id: string): Promise<Result<User>> {
    let mongoExecutor = new MongoExecutor<User>();
    return mongoExecutor.execute(async () => {
      let userdb = new UserDb();
      let mapper = new UserMapper();
      let user = await userdb.getUser(id);
      return mapper.map(user);
    })
  }
}