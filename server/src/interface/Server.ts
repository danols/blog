import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as mongoose from "mongoose";

import { container } from '../IOC';
import '../Provider';

dotenv.config({ path: ".env" });

(mongoose as any).Promise = global.Promise;
mongoose.connect(process.env.MONGO, { useMongoClient: true })
    .then(() => console.log('Mongo Init'))
    .catch(err => console.log(err));

let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
});

let app = server.build();
app.listen(8080);

console.log('Server started on port 8080 :)');
