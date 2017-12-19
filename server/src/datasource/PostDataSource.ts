import { Result } from '../domain/Result';
import { MongoExecutor } from '../datasource/mongoose/MongoExecutor';
import { PostMapper } from '../datasource/mongoose/mapper/PostMapper';
import { PostRepository } from '../domain/repository/PostRepository';
import { Post } from '../domain/model/Post';
import { PostDb } from '../datasource/mongoose/PostDb';

export class PostDataSource implements PostRepository {
  getPost (id: string): Promise<Result<Post>> {
    let mongoExecutor = new MongoExecutor<Post>();
    return mongoExecutor.execute(async () => {
      let postdb = new PostDb();
      let mapper = new PostMapper();
      let post = await postdb.getPost(id);
      return mapper.toPost(post);
    })
  }

  savePost (post: Post): Promise<Result<void>> {
    let mongoExecutor = new MongoExecutor<void>();
    return mongoExecutor.execute(async () => {
      let postdb = new PostDb();
      let mapper = new PostMapper();
      let result = await postdb.savePost(mapper.toMongoPost(post));
      return result;
    })
  }
}