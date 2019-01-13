import {Component, DoCheck, ElementRef, OnChanges, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ManagementsaleService} from '../managementsale.service';
import {Cp} from '../model/cp';


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

    provinces: any[] = [
        {id: 0, name: 'استان'},
        {id: 1, name: 'آذربایجان غربی'},
        {id: 2, name: 'آذربایجان شرقی'},
        {id: 3, name: 'مشهد'},
        {id: 4, name: 'قم'},
        {id: 5, name: 'تهران'}
    ];

    cities = [
        {id: 0, name: 'شهر', province: 0},
        {id: 1, name: 'تبریز', province: 2},
        {id: 2, name: 'مرند', province: 2},
        {id: 3, name: 'خوی', province: 1},
        {id: 4, name: 'ارومیه', province: 1}
    ];
    selected = 0;
    citySelection = 0;

    citi(select) {
        return this.cities.filter(city => city.province === select);
    }


    constructor(private managementService: ManagementsaleService) {
    }


    ngOnInit() {

    }


    selectOption() {
        this.citySelection = this.selected;
        console.log('this for selected:' + this.selected);
        console.log('this is for city selection:' + this.citySelection);

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
}
