import { default as MongoUser, MongoUserModel } from './model/MongoUser';

export class UserDb {
  getUser (id: string): Promise<MongoUserModel> {
    let query = MongoUser.findById(id);
    return query.exec();
  }
}