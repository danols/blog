import 'reflect-metadata';
import { controller, httpGet, httpPost, httpPut, httpDelete } from 'inversify-express-utils';
import { inject } from 'inversify';
import { Request, Response } from 'express';

import { Types } from '../../Types';

import { GetUser } from '../../app/GetUser';
import { Result } from '../../domain/Result';
import { User } from '../../domain/model/User';

@controller('/user')
export class UserController {
  @inject(Types.GetUser)
  private getUser: GetUser;

  @httpGet('/:userId')
  public async getUserById(request: Request, response: Response): Promise<Result<User>> {
    let result = await this.getUser.execute(request.params.userId);
    return result;
  }
}