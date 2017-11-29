import { Result } from '../../domain/Result'

export class MongoExecutor<T> {

  async execute (promise: () => Promise<T>): Promise<Result<T>> {
    try {
      let result = await promise();
      return new Result(result, false);
    } catch (error) {
      return new Result(error, true);
    }
  }

}