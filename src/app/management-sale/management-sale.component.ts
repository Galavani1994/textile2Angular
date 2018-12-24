import {Component, OnInit} from '@angular/core';
import {ManagementsaleService} from '../managementsale.service';
import {Customer} from '../model/customer';

@Component({
    selector: 'app-management-sale',
    templateUrl: './management-sale.component.html',
    styleUrls: ['./management-sale.component.css']
})
export class ManagementSaleComponent implements OnInit {

    loadedCustomer = [];
    loadedProduction = [];
    customer: Customer = [{
        id: null,
        cuid: null,
        firstName: null,
        lastName: null,
        addressname: null,
        mande: null,
        mobileNum: null,
        phoneNum: null,
        descreption: null,
        registerDate: null,
        lastCome: null,
        zamen: [{id: null, zamenName: null, zamenFamily: null}]
    }];

    constructor(private managementsaleService: ManagementsaleService) {
    }

    ngOnInit() {
    }

    getCU(dataCU) {
        this.loadedCustomer = dataCU;
    }

    getCustomer(event: any) {
        this.managementsaleService.getCustomer(event.target.value).subscribe(
            (dataCU) => {
                this.getCU(dataCU);
            },
            error1 => {
                console.log('fail...');
            },
            () => {
                console.log('okkkkkkkkkkkk...');
            }
        );
    }

    getProduction(event: any) {
        this.managementsaleService.getProduction(event.target.value).subscribe(
            (dataPR) => {
                this.loadedProduction = dataPR;
            }
        );
    }
}
