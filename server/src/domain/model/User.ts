export class User {
  private name: string;
  private username: string;
  private email: string;
  private avatar: string;
  private language: string;
  private bio: string;
  private bookmarks: string[];
  private posts: string[];
  private subscriptions: string[];
  private following: string[];
  private followers: string[];

  constructor (builder: UserBuilder) {
    this.name = builder.Name;
    this.username = builder.Username;
    this.email = builder.Email;
    this.avatar = builder.Avatar;
    this.language = builder.Language;
    this.bio = builder.Bio;
    this.bookmarks = builder.Bookmarks;
    this.posts = builder.Posts;
    this.subscriptions = builder.Subscriptions;
    this.following = builder.Following;
    this.followers = builder.Followers;
  }

  get Name (): string { return this.name }
  get Username (): string { return this.name }
  get Email (): string { return this.name }
  get Avatar (): string { return this.name }
  get Language (): string { return this.name }
  get Bio (): string { return this.name }
  get Bookmarks (): string[] { return this.bookmarks }
  get Posts (): string[] { return this.posts }
  get Subscriptions (): string[] { return this.subscriptions }
  get Following (): string[] { return this.following }
  get Followers (): string[] { return this.followers }
}

export class UserBuilder {
  private name: string;
  private username: string;
  private email: string;
  private avatar: string;
  private language: string;
  private bio: string;
  private bookmarks: string[];
  private posts: string[];
  private subscriptions: string[];
  private following: string[];
  private followers: string[];

  constructor () {}

  get Name (): string { return this.name }

  get Username (): string { return this.name }

  get Email (): string { return this.name }

  get Avatar (): string { return this.name }

  get Language (): string { return this.name }

  get Bio (): string { return this.name }

  get Bookmarks (): string[] { return this.bookmarks }

  get Posts (): string[] { return this.posts }

  get Subscriptions (): string[] { return this.subscriptions }

  get Following (): string[] { return this.following }

  get Followers (): string[] { return this.followers }

  setName (name: string): UserBuilder { 
    this.name = name;
    return this;
  }

  setUsername (username: string): UserBuilder {
    this.username = username;
    return this;
  }

  setEmail (email: string): UserBuilder { 
    this.email = email;
    return this;
  }

  setAvatar (avatar: string): UserBuilder {
    this.avatar = avatar;
    return this;
  }

  setLanguage (language: string): UserBuilder {
    this.language = language;
    return this;
  }

  setBio (bio: string): UserBuilder {
    this.bio = bio;
    return this;
  }

  setBookmarks (bookmarks: string[]): UserBuilder {
    this.bookmarks = bookmarks;
    return this;
  }

  setPosts (posts: string[]): UserBuilder {
    this.posts = posts;
    return this;
  }

  setSubscriptions (subscriptions: string[]): UserBuilder {
    this.subscriptions = subscriptions;
    return this;
  }

  setFollowing (following: string[]): UserBuilder {
    this.following = following;
    return this;
  }

  setFollowers (followers: string[]): UserBuilder {
    this.followers = followers;
    return this;
  }

  build(): User {
    return new User(this);
  }
}