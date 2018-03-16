import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class UserService {

  constructor() { }

  create(user: User) {
    return true;
}

}
