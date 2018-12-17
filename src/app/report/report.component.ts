import {Component, OnInit} from '@angular/core';
import * as moment from 'ng2-jalali-date-picker';
import {FormBuilder, FormControl} from '@angular/forms';
import {DateAdapter} from '@angular/material';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


    selectedDate = '';

    config = {
        theme: 'dp-material',
        format: 'YYYY/MM/DD'


    };

    constructor() {

    }


    ngOnInit() {
    }

}
