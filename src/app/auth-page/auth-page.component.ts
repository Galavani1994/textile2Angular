import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    onloggin() {
        this.authService.login();
        alert('شما با موفقیت وارد حساب کاربری خود شده اید');
    }
}
