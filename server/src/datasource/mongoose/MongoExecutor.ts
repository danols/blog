import { Result } from '../../domain/Result'
import { MongoDBConnection } from './MongoDBConnection';

export class MongoExecutor<T> {

  async execute (promise: () => Promise<T>): Promise<Result<T>> {
    try {
      await MongoDBConnection.connect();
      let result = await promise();
      return new Result(result, false, 'Success');
    } catch (error) {
      return new Result(null, true, error.message);
    }
  }

}