import {Injectable} from '@angular/core';
import {TextileService} from './textile.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserTable} from '../model/userRole/userTable';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private static readonly MAIN_URL = 'http://localhost:8091/';

    private static readonly POST_USER_URL = UserService.MAIN_URL + 'body/save';
    private static readonly GET_USER_ALL_URL = UserService.MAIN_URL + 'body/getAllUser';
    private static readonly GET_DELETE_USER_URL = UserService.MAIN_URL + 'body/deleteUser/';


    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }

    saveUsers(userTable) {

        return this.http.post(UserService.POST_USER_URL, userTable, {headers: this.headers});
    }

    getUsers(): Observable<any> {
        return this.http.get(UserService.GET_USER_ALL_URL);
    }

    deleteUser(id) {
        return this.http.get(UserService.GET_DELETE_USER_URL + id);
    }

    signInUser(body) {
        return this.http.post('http://localhost:8091/login', body, {headers: this.headers});
    }
}
