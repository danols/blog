export class Result<T> {
  private data: T;
  private error: boolean;
  private message: string;
  private statusCode: number;

  constructor (data: T, error: boolean, message: string) {
    this.data = data;
    this.error = error;
    this.message = message;
  }

  set Data(data: T) { this.data = data }
  get Data(): T { return this.data }

  set Error(error: boolean) { this.error = error }
  get Error(): boolean { return this.error }

  set Message(message: string) { this.message = message }
  get Message(): string { return this.message }

  set StatusCode(statusCode: number) { this.statusCode = statusCode }
  get StatusCode(): number { return this.statusCode }
}
