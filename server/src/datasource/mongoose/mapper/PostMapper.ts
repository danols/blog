import { Post, PostBuilder } from '../../../domain/model/Post'
import { default as MongoPost, MongoPostModel } from '../../mongoose/model/MongoPost';

export class PostMapper {
  toPost (mongoPostModel: MongoPostModel): Post {
    return new PostBuilder()
    .setContent(mongoPostModel.content)
    .setParentPost(mongoPostModel.parentPost)
    .setImages(mongoPostModel.images)
    .setHashtags(mongoPostModel.hashtags)
    .setReposts(mongoPostModel.reposts)
    .setURLS(mongoPostModel.urls)
    .setDate(mongoPostModel.date)
    .setStatus(mongoPostModel.status)
    .setTags(mongoPostModel.tags)
    .setOwner(mongoPostModel.owner)
    .setLikes(mongoPostModel.likes)
    .build()
  }

  toMongoPost (post: Post): MongoPostModel {
    return {
      content: post.Content,
      parentPost: post.ParentPost,
      images: post.Images,
      reposts: post.Reposts,
      date: post.Date,
      hashtags: post.Hashtags,
      status: post.Status,
      tags: post.Tags,
      urls: post.URLS,
      owner: post.Owner,
      likes: post.Likes,
    } as MongoPostModel;
  }
}