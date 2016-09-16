import { Injectable } from '@angular/core';

import { User } from '../object-metadata'
import { MockUsers } from '../mock/mock-users'

@Injectable()
export class UserService {
    constructor() { }
    getUsers():User[]{
        return MockUsers
    }

    getUsersPromise():Promise<User[]>{
        return Promise.resolve(MockUsers);
    }
}