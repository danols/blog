import { User, UserBuilder } from '../../../domain/model/User'
import { default as MongoUser, MongoUserModel } from '../../mongoose/model/MongoUser';

export class UserMapper {
  map (mongoUserModel: MongoUserModel): User {
    return new UserBuilder()
    .setName(mongoUserModel.name)
    .setUsername(mongoUserModel.username)
    .setEmail(mongoUserModel.email)
    .setAvatar(mongoUserModel.avatar)
    .setLanguage(mongoUserModel.language)
    .setBio(mongoUserModel.bio)
    .setBookmarks(mongoUserModel.bookmarks)
    .setPosts(mongoUserModel.posts)
    .setSubscriptions(mongoUserModel.subscriptions)
    .setFollowers(mongoUserModel.followers)
    .setFollowing(mongoUserModel.following)
    .build()
  }
}