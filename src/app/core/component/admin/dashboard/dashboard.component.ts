import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UserTable} from '../../../model/userRole/userTable';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    allUser: UserTable[];
    user: UserTable = new UserTable();
    role = {id: null, role: null};

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUsers().subscribe(
            (users) => {
                this.allUser = users;
            },
            error1 => {
                console.log('Failed to load Users');
            },
            () => {
                console.log('comleted the laod users');
            }
        );
    }

    deleteUser(user: UserTable) {
        this.userService.deleteUser(user.id).subscribe(
            (users) => {
                console.log('DELTE_USER');
            },
            error1 => {
                console.log('Failed to load Users');
            },
            () => {
                console.log('comleted the delete users');
                this.userService.getUsers().subscribe(
                    (users) => {
                        this.allUser = users;
                    },
                    error1 => {
                        console.log('Failed to load Users');
                    },
                    () => {
                        console.log('comleted the laod users');
                    }
                );
            }
        );
    }

    userInformation(user) {
        console.log(user);
        this.user = user;
    }

    rolesave(role) {
        this.user.roles[0].role = this.role.role;
        this.userService.saveUsers(this.user).subscribe(
            (dataa) => {
                console.log('Update_User...');
            },
            error1 => {
                console.log('Failed Update User');
            },
            () => {
                console.log('completed Update');
            }
        );

    }
}
