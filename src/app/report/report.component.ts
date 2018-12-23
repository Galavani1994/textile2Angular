import {Component, OnInit} from '@angular/core';
import * as moment from 'ng2-jalali-date-picker';
import {FormBuilder, FormControl} from '@angular/forms';
import {DateAdapter} from '@angular/material';
import {Zamen} from '../model/zamen';
import {TextileService} from '../textile.service';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


    constructor(private textileService: TextileService) {
    }


    ngOnInit() {
    }


}
