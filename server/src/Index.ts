import * as Mongoose from "mongoose";
import * as dotenv from "dotenv";

import { UserRepository } from './domain/repository/UserRepository';
import { UserDataSource } from './datasource/UserDataSource';
import { Result } from './domain/Result';
import { GetUser } from './app/GetUser';

dotenv.config({ path: ".env" });

(Mongoose as any).Promise = global.Promise;
Mongoose.connect(process.env.MONGO, { useMongoClient: true })
    .then(() => {test()})
    .catch(err => console.log(err));

let test = async () => {
  let userDataSource: UserRepository = new UserDataSource();
  let getUser = new GetUser(userDataSource);
  let result = await getUser.execute('5a1e75e93aa6cf22d666a61f');
  console.log(result.error)
  console.log(result.data)
}