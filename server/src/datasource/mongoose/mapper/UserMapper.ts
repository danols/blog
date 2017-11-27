import { User, UserBuilder } from '../../../domain/model/User'
import { default as MongoUser } from '../../mongoose/model/MongoUser';

export class UserMapper {
  map (mongoUser: any): User {
    return new UserBuilder()
    .setName(mongoUser.name)
    .setUsername(mongoUser.username)
    .setEmail(mongoUser.email)
    .setAvatar(mongoUser.avatar)
    .setLanguage(mongoUser.laguage)
    .setBio(mongoUser.bio)
    .setBookmarks(mongoUser.bookmarks)
    .setPosts(mongoUser.posts)
    .setSubscriptions(mongoUser.subscriptions)
    .setFollowers(mongoUser.followers)
    .setFollowing(mongoUser.following)
    .build()
  }
}