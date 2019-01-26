import {Component, DoCheck, ElementRef, OnChanges, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ManagementsaleService} from '../services/managementsale.service';
import {Cp} from '../model/cp';
import {Iran9697} from '../model/iran96-97';
import {UserService} from '../services/user.service';


@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    allow = false;
    totalSale = null;
    totalDiscount = null;
    dates = {fromDate: null, toDatee: null};
    prDates = {fromDate: null, toDatee: null, prInfo: null};
    cpData: Cp[];
    cpDatabyPr: Cp[];


    config = {

        format: 'YYYY/MM/DD'
    };
    let;
    body = {username: null, password: null};


    constructor(private managementService: ManagementsaleService, private userservice: UserService) {
    }


    ngOnInit() {
    }

    searchbetween() {
        console.log(this.dates.fromDate);
        console.log(this.dates);


        this.managementService.reporCp(this.dates).subscribe(
            (dataa) => {
                this.cpData = dataa[0];
                this.totalSale = dataa[1];
                this.totalDiscount = dataa[2];
            },
            error1 => {
                console.log('fail the activation...');
            },
            () => {
                console.log('complete.......');
            }
        );
    }

    reportByPr(value) {
        this.prDates.prInfo = value;
        this.managementService.reporCpbyPr(this.prDates).subscribe(
            (value1) => {
                this.cpDatabyPr = value1;
            },
            error1 => {
                console.log('Fail...');
            },
            () => {
                console.log('complete...');
            }
        );

    }

    onLogIn() {
        console.log(this.body);
        /*this.userservice.signInUser(this.body).subscribe(
            (response) => {
                console.log(response);
            }
        );*/
    }
}
