export class User {
  private name: string;
  private username: string;
  private email: string;
  private password: string; 
  private avatar: string;
  private public: boolean;
  private bio: string;
  private posts: string[];
  private following: string[];
  private followers: string[];
  private likes: string[];
  private reposts: string[];

  constructor (builder: UserBuilder) {
    this.name = builder.Name;
    this.username = builder.Username;
    this.email = builder.Email;
    this.password = builder.Password;
    this.avatar = builder.Avatar;
    this.public = builder.Public;
    this.bio = builder.Bio;
    this.likes = builder.Likes;
    this.posts = builder.Posts;
    this.reposts = builder.Reposts;
    this.following = builder.Following;
    this.followers = builder.Followers;
  }

  get Name (): string { return this.name }
  get Username (): string { return this.username }
  get Email (): string { return this.email }
  get Avatar (): string { return this.avatar }
  get Password (): string { return this.password }
  get Public (): boolean { return this.public }
  get Bio (): string { return this.bio }
  get Likes (): string[] { return this.likes }
  get Posts (): string[] { return this.posts }
  get Reposts (): string[] { return this.reposts }
  get Following (): string[] { return this.following }
  get Followers (): string[] { return this.followers }
}

export class UserBuilder {
  private name: string;
  private username: string;
  private email: string;
  private password: string; 
  private avatar: string;
  private public: boolean;
  private bio: string;
  private posts: string[];
  private following: string[];
  private followers: string[];
  private likes: string[];
  private reposts: string[];

  constructor () {}

  get Name (): string { return this.name }
  get Username (): string { return this.username }
  get Email (): string { return this.email }
  get Avatar (): string { return this.avatar }
  get Password (): string { return this.password }
  get Public (): boolean { return this.public }
  get Bio (): string { return this.bio }
  get Likes (): string[] { return this.likes }
  get Posts (): string[] { return this.posts }
  get Reposts (): string[] { return this.reposts }
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

  setPassword (password: string): UserBuilder {
    this.password = password;
    return this;
  }

  setAvatar (avatar: string): UserBuilder {
    this.avatar = avatar;
    return this;
  }

  setPublic (_public: boolean): UserBuilder {
    this.public = _public;
    return this;
  }

  setBio (bio: string): UserBuilder {
    this.bio = bio;
    return this;
  }

  setReposts(reposts: string[]): UserBuilder {
    this.reposts = reposts;
    return this;
  }

  setPosts (posts: string[]): UserBuilder {
    this.posts = posts;
    return this;
  }

  setLikes (likes: string[]): UserBuilder {
    this.likes = likes;
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