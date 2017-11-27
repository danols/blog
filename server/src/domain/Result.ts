export class Result<T> {
  data: T;
  error: boolean;

  constructor (data: T, error: boolean) {
    this.data = data;
    this.error = error;
  }
}
