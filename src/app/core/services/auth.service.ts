import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export enum AuthTokenType {
    AccessToken,
    RefreshToken
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

}
