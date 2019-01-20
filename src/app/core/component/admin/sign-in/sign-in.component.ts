import {Component, OnInit} from '@angular/core';
import {UserTable} from '../../../model/userRole/userTable';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    userInfo: UserTable = new UserTable();


    constructor(private userService: UserService) {
    }

    ngOnInit() {

    }

    saveUser() {
        this.userService.saveUsers(this.userInfo).subscribe(
            (dataa) => {
                console.log('Created_New_User...');
            },
            error1 => {
                console.log('Failed Created User');
            },
            () => {
                console.log('completed create');
            }
        );

    }

    getUser() {

    }
}
