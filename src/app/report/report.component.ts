import {Component, DoCheck, ElementRef, OnChanges, OnInit, Renderer2, ViewChild} from '@angular/core';


@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, DoCheck {

    allow = false;

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


    constructor() {
    }


    ngOnInit() {

    }


    selectOption() {
        this.citySelection = this.selected;
        console.log('this for selected:' + this.selected);
        console.log('this is for city selection:' + this.citySelection);

    }

    selectionOptionCity() {

    }

    ngDoCheck(): void {
        this.citySelection = this.selected;
    }
}
