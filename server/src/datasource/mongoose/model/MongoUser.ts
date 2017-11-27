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

const MongoUser = Mongoose.model('User', _schema);
export default MongoUser;
