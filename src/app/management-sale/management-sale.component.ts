import {Component, DoCheck, OnInit} from '@angular/core';
import {ManagementsaleService} from '../managementsale.service';
import * as momentJalaali from 'moment-jalaali';
import {Cp} from '../model/cp';

@Component({
    selector: 'app-management-sale',
    templateUrl: './management-sale.component.html',
    styleUrls: ['./management-sale.component.css']
})
export class ManagementSaleComponent implements OnInit, DoCheck {

    operationPr: Cp = {
        id: null,
        cuid: null,
        prid: null,
        prName: null,
        metercp: null,
        price: null,
        discount: null,
        pay: null,
        factore: null,
        remain: null,
        kaladate: null
    };

    loadedCustomer = [{
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
    loadedProduction = [{
        id: null, prid: null, prName: null, meterPr: null, tarikh: null
    }];
    cpAndCustomer = [{  id: null, cuid: null, firstName: null, lastName: null, addressname: null, mande: null,
        mobileNum: null, phoneNum: null, descreption: null,
        registerDate: null, lastCome: null, zamen: [{id: null, zamenName: null, zamenFamily: null}]},
        { id: null, cuid: null, prid: null, prName: null, metercp: null, price: null, discount: null, pay: null,
            factore: null, remain: null, kaladate: null}];

    constructor(private managementsaleService: ManagementsaleService) {
    }

    ngOnInit() {
        momentJalaali.loadPersian();
        this.operationPr.kaladate = momentJalaali().format('jYYYY/jMM/jDD');
    }

    ngDoCheck() {
        this.operationPr.remain = (this.operationPr.metercp * this.operationPr.price - this.operationPr.discount) - this.operationPr.pay;
    }

    getCU(dataCU) {
        this.cpAndCustomer = dataCU;
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
                console.log('laoded successfully...');
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

    productionEvent(event: any) {
        console.log(event.target.value);
    }


    cpInfo() {

        /*this.operationPr.cuid = this.loadedCustomer.cuid;
        this.operationPr.prid = this.loadedProduction.prid;
        this.operationPr.prName = this.loadedProduction.prName;
        const date = new Date(this.operationPr.kaladate);
        this.operationPr.kaladate = date;
        console.log(this.operationPr);
        this.managementsaleService.saveCp(this.operationPr).subscribe(
            () => {
                console.log('[POST]_create CPTable');
            },
            error1 => {
                console.log('Fail to Save CPTable');
            },
            () => {
                console.log('Saves Successfully....');
            }
        );*/
    }
}
