import {Component, OnInit} from '@angular/core';
import * as moment from 'ng2-jalali-date-picker';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    persianDate = '';
    datePickerConfig = {
        format: 'YYYY/MM/D',

    }
    constructor(){

    }



    ngOnInit() {
    }

}
