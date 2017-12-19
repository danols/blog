import { Result } from '../Result';
import { Post } from '../model/Post';

export interface PostRepository {
  getPost (id: string): Promise<Result<Post>>
  savePost (post: Post): Promise<Result<void>>
}
