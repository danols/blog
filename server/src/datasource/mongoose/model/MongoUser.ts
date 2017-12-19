import * as Mongoose from 'mongoose';

const _schema = new Mongoose.Schema({

  name: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  avatar: String,
  public: Boolean,
  bio: String,
  likes: [String],
  posts: [String],
  reposts: [String],
  following: [String],
  followers: [String]
  
}, { timestamps: false });

export type MongoUserModel = Mongoose.Document & {
  name: string,
  username: string,
  email: string,
  password: string,
  avatar: string,
  public: boolean,
  bio: string,
  likes: string[],
  posts: string[],
  reposts: string[],
  following: string[],
  followers: string[]
}

const MongoUser = Mongoose.model<MongoUserModel>('User', _schema);
export default MongoUser;
