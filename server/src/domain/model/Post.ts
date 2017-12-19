export class Post {
  private parentPost: string;
  private content: string;
  private date: number;
  private status: string;
  private tags: string[];
  private owner: string;
  private likes: string[];
  private images: string[];
  private urls: string[];
  private hashtags: string[];
  private reposts: string[];

  constructor (builder: PostBuilder) {
    this.parentPost = builder.ParentPost;
    this.images = builder.Images;
    this.urls = builder.URLS;
    this.content = builder.Content;
    this.date = builder.Date;
    this.hashtags = builder.Hashtags;
    this.status = builder.Status;
    this.tags = builder.Tags;
    this.reposts = builder.Reposts;
    this.owner = builder.Owner;
    this.likes = builder.Likes;
  }

  get ParentPost (): string { return this.parentPost }
  get Content (): string { return this.content }
  get Date (): number { return this.date }
  get Status (): string { return this.status }
  get Owner (): string { return this.owner }
  get Images (): string[] { return this.images }
  get Tags (): string[] { return this.tags }
  get Likes (): string[] { return this.likes }
  get URLS (): string[] { return this.urls }
  get Hashtags (): string[] { return this.hashtags }
  get Reposts (): string[] { return this.reposts }

}

export class PostBuilder {
  private parentPost: string;
  private content: string;
  private date: number;
  private status: string;
  private tags: string[];
  private owner: string;
  private likes: string[];
  private images: string[];
  private urls: string[];
  private hashtags: string[];
  private reposts: string[];

  constructor () {}

  get ParentPost (): string { return this.parentPost }
  get Content (): string { return this.content }
  get Date (): number { return this.date }
  get Status (): string { return this.status }
  get Owner (): string { return this.owner }
  get Images (): string[] { return this.images }
  get Tags (): string[] { return this.tags }
  get Likes (): string[] { return this.likes }
  get URLS (): string[] { return this.urls }
  get Hashtags (): string[] { return this.hashtags }
  get Reposts (): string[] { return this.reposts }

  setParentPost (parentPost: string): PostBuilder { 
    this.parentPost = parentPost;
    return this;
  }

  setContent (content: string): PostBuilder {
    this.content = content;
    return this;
  }

  setDate (date: number): PostBuilder {
    this.date = date;
    return this;
  }

  setURLS (urls: string[]): PostBuilder {
    this.urls = urls;
    return this;
  }

  setStatus (status: string): PostBuilder {
    this.status = status;
    return this;
  }

  setOwner (owner: string): PostBuilder {
    this.owner = owner;
    return this;
  }

  setTags (tags: string[]): PostBuilder {
    this.tags = tags;
    return this;
  }

  setLikes (likes: string[]): PostBuilder {
    this.likes = likes;
    return this;
  }

  setHashtags (hashtags: string[]): PostBuilder {
    this.hashtags = hashtags;
    return this;
  }

  setReposts (reposts: string[]): PostBuilder {
    this.reposts = reposts;
    return this;
  }

  setImages (images: string[]): PostBuilder {
    this.images = images;
    return this;
  }

  build(): Post {
    return new Post(this);
  }
}