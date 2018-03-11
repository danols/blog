import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import { container } from '../IOC';
import '../Provider';

dotenv.config({ path: ".env" });

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
});

let app = server.build();

app.listen(process.env.PORT || 8080);
console.log('Server started on port 8080 :)');
