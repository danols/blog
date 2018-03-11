import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config({ path: ".env" });

export class MongoDBConnection {
  private static isConnected: boolean = false;

  public static async connect() {
    if (!this.isConnected) {
      (mongoose as any).Promise = global.Promise;
      await mongoose.connect(process.env.MONGO, { useMongoClient: true })
      this.isConnected = true;
      console.log('Mongo Init')
    }
  } 
}