import { default as MongoUser, MongoUserModel } from './model/MongoUser';
import { ObjectId } from 'bson';

export class UserDb {
  async getUser (id: string): Promise<MongoUserModel> {
    let query = MongoUser.findById(new ObjectId(id));
    let user = await query.exec();
    return user;
  }

  async saveUser (user: MongoUserModel): Promise<void> {
    let nUser = new MongoUser(user);
    let _ = await nUser.save();
  }
}