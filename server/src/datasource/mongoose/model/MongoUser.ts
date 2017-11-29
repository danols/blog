import * as Mongoose from 'mongoose';

const _schema = new Mongoose.Schema({

  name: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  avatar: String,
  language: String,
  bio: String,
  bookmarks: [String],
  posts: [String],
  subscriptions: [String],
  following: [String],
  followers: [String]
  
}, { timestamps: false });

export type MongoUserModel = Mongoose.Document & {
  name: string,
  username: string,
  email: string,
  password: string,
  avatar: string,
  language: string,
  bio: string,
  bookmarks: string[],
  posts: string[],
  subscriptions: string[],
  following: string[],
  followers: string[]
}

const MongoUser = Mongoose.model<MongoUserModel>('User', _schema);
export default MongoUser;
