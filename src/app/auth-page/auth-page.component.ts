import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

    body = {username: null, password: null};

    constructor(private authService: AuthService, private userservice: UserService) {
    }

    ngOnInit() {
    }

    logInToserver() {
        this.userservice.signInUser(this.body).subscribe(
            (response) => {
                console.log(response);
            }, error1 => {
                console.log('failed login');
            },
            () => {
                this.authService.login();
            }
        );
    }
}
