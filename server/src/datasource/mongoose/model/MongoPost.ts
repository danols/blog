import * as Mongoose from 'mongoose';

const _schema = new Mongoose.Schema({

  content: String,
  parentPost: String,
  images: [String],
  status: String,
  urls: [String],
  date: Number,
  hashtags: [String],
  tags: [String],
  owner: String,
  likes: [String],
  reposts: [String]
  
}, { timestamps: false });

export type MongoPostModel = Mongoose.Document & {
  
  content: string,
  parentPost: string,
  images: string[],
  status: string,
  urls: string[],
  date: number,
  hashtags: string[],
  tags: string[],
  owner: string,
  likes: string[],
  reposts: string[]
}

const MongoPost = Mongoose.model<MongoPostModel>('Post', _schema);
export default MongoPost;
