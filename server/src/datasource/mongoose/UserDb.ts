import { default as MongoUser } from './model/MongoUser';

export class UserDb {
  getUser (id: string) {
    let query = MongoUser.findById(id);
    return query.exec();
  }
}