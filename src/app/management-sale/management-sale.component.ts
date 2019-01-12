import {Component, DoCheck, OnInit, Renderer2} from '@angular/core';
import {ManagementsaleService} from '../managementsale.service';
import * as momentJalaali from 'moment-jalaali';

import {TextileService} from '../textile.service';
import {DatePickerComponent} from 'ng2-jalali-date-picker';
import * as moment from 'jalali-moment';
import _date = moment.unitOfTime._date;
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-management-sale',
    templateUrl: './management-sale.component.html',
    styleUrls: ['./management-sale.component.css']
})
export class ManagementSaleComponent implements OnInit, DoCheck {

    operationPr = {
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

    loadedProduction = [{
        id: null, prid: null, prName: null, meterPr: null, tarikh: null
    }];
    cpAndCustomer = [{
        id: null, cuid: null, firstName: null, lastName: null, addressname: null, mande: null,
        mobileNum: null, phoneNum: null, descreption: null,
        registerDate: null, lastCome: null, zamen: [{id: null, zamenName: null, zamenFamily: null}]
    },
        {
            id: null, cuid: null, prid: null, prName: null, metercp: null, price: null,
            discount: null, pay: null, factore: null, remain: null, kaladate: null
        }];

    prsearch = [];
    cusearch = [];
    config = {

        format: 'YYYY/MM/DD'
    };

    constructor(private managementsaleService: ManagementsaleService,
                private render: Renderer2,
                private textileService: TextileService) {
    }

    ngOnInit() {
        momentJalaali.loadPersian();
        this.operationPr.kaladate = momentJalaali().format('jYYYY/jMM/jDD');
        this.render.selectRootElement('#cuid').focus();
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
        this.render.selectRootElement('#prid').focus();
    }

    getProduction(event: any) {
        this.managementsaleService.getProduction(event.target.value).subscribe(
            (dataPR) => {
                this.loadedProduction = dataPR;
            }
        );
        this.render.selectRootElement('#metercp').focus();
    }

    savecpInfo() {

        console.log(this.operationPr);
        this.operationPr.cuid = this.cpAndCustomer[0].cuid;
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
                this.managementsaleService.getCustomer(this.cpAndCustomer[0].cuid).subscribe(
                    (dataCU) => {
                        this.getCU(dataCU);
                    }
                );
            }
        );


        this.loadedProduction.id = null;
        this.loadedProduction.prid = null;
        this.loadedProduction.prName = null;
        this.loadedProduction.meterPr = null;
        this.operationPr.id = null;
        this.operationPr.cuid = null;
        this.operationPr.prid = null;
        this.operationPr.prName = null;
        this.operationPr.metercp = null;
        this.operationPr.price = null;
        this.operationPr.discount = null;
        this.operationPr.pay = null;
        this.operationPr.factore = null;
        this.operationPr.remain = null;
        momentJalaali.loadPersian();
        this.operationPr.kaladate = momentJalaali().format('jYYYY/jMM/jDD');
        this.render.selectRootElement('#prid').focus();
    }

    deleteCp(cp) {
        console.log(cp);
        this.managementsaleService.deleteCP(cp.id).subscribe(
            () => {
                console.log('successfully deleted...');
            },
            error1 => {
                console.log('Failed deleted...');
            },
            () => {
                this.managementsaleService.getCustomer(this.cpAndCustomer[0].cuid).subscribe(
                    (dataCU) => {
                        this.getCU(dataCU);
                    }
                );
            }
        );
    }

    editCp(cp) {
        console.log(cp);
        this.operationPr = cp;

        const date = new Date(this.operationPr.kaladate);
        this.operationPr.kaladate = date;

        this.managementsaleService.editCp(this.operationPr).subscribe(
            () => {
                console.log('[POST]_create CPTable');
            },
            error1 => {
                console.log('Fail to Save CPTable');
            },
            () => {
                this.managementsaleService.getCustomer(this.cpAndCustomer[0].cuid).subscribe(
                    (dataCU) => {
                        this.getCU(dataCU);
                    }
                );
            }
        );
        // momentJalaali(date).format('jYYYY/jMM/jDD').toDate();
        this.operationPr.kaladate = momentJalaali().format('jYYYY/jMM/jDD');

    }

    nextinput(event) {

        if (event.target.id === 'metercp') {
            this.render.selectRootElement('#price').focus();
        } else if (event.target.id === 'price') {
            this.render.selectRootElement('#discount').focus();
        } else if (event.target.id === 'discount') {
            this.render.selectRootElement('#pay').focus();
        } else if (event.target.id === 'pay') {
            this.render.selectRootElement('#factore').focus();
        }
    }

    searchPr(event) {
        this.textileService.SearchProduction(event.target.value).subscribe(
            value => {
                this.prsearch = value;
            }
        );

    }

    searchCu(event) {
        this.textileService.SearchCustomer(event.target.value).subscribe(
            value => {
                this.cusearch = value;
            }
        );
    }
}
