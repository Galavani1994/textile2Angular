import {Role} from './role';

export class UserTable {
    id = null;
    username;
    password;
    email;
    passwordString;
    roles = [{id: null, role: null}];
}
