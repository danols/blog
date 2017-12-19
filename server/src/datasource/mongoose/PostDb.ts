import { default as MongoPost, MongoPostModel } from './model/MongoPost';

export class PostDb {
  async getPost (id: string): Promise<MongoPostModel> {
    let query = MongoPost.findById(id);
    let post = await query.exec();
    return post;
  }

  async savePost (post: MongoPostModel): Promise<void> {
    let nPost = new MongoPost(post);
    let _ = await nPost.save();
  }
}