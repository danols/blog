import { User, UserBuilder } from '../../../domain/model/User'
import { default as MongoUser, MongoUserModel } from '../../mongoose/model/MongoUser';

export class UserMapper {
  toUser (mongoUserModel: MongoUserModel): User {
    return new UserBuilder()
    .setName(mongoUserModel.name)
    .setUsername(mongoUserModel.username)
    .setEmail(mongoUserModel.email)
    .setPassword(mongoUserModel.password)
    .setAvatar(mongoUserModel.avatar)
    .setPublic(mongoUserModel.public)
    .setBio(mongoUserModel.bio)
    .setLikes(mongoUserModel.likes)
    .setPosts(mongoUserModel.posts)
    .setReposts(mongoUserModel.reposts)
    .setFollowers(mongoUserModel.followers)
    .setFollowing(mongoUserModel.following)
    .build()
  }

  toMongoUser (user: User): MongoUserModel {
    return {
      name: user.Name,
      username: user.Username,
      email: user.Email,
      password: user.Password,
      avatar: user.Avatar,
      public: user.Public,
      bio: user.Bio,
      likes: user.Likes,
      posts: user.Posts,
      reposts: user.Reposts,
      followers: user.Followers,
      following: user.Following
    } as MongoUserModel;
  }
}