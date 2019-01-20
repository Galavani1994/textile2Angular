import {Component, OnInit} from '@angular/core';
import {TextileService} from '../../services/textile.service';
import {DatePickerComponent} from 'ng2-jalali-date-picker';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {until} from 'selenium-webdriver';
import urlContains = until.urlContains;
import {WindowRefService} from '../../services/WindowRef.service';


@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    isAllow = false;


    constructor(private textileService: TextileService, private sanitizer: DomSanitizer) {
    }

    config = {
        format: 'YYYY/MM/DD'
    };
    customers = [];
    zamen = {id: null, zamenName: null, zamenFamily: null};
    customer = {
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
    };

    editcustomer = [{
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

    searchedCu = [];
    private pdfsrc = null;


    ngOnInit() {
        this.textileService.getAllCustomer().subscribe(
            (data) => {
                this.getAllCu(data);
            }
        );

    }

    saveCustomer() {

        const date = this.customer.registerDate;
        const date1 = new Date(date);
        this.customer.registerDate = date1;
        this.textileService.saveCustomer(this.customer).subscribe(
            () => {
                console.log('Customer Save Successfull....');
            },
            error1 => {
                console.log('Fail...');
            },
            () => {
                this.textileService.getAllCustomer().subscribe(
                    (data) => {
                        this.getAllCu(data);
                    }
                );
            }
        );
    }

    getAllCu(data) {
        return this.customers = data;
    }

    showCustomer(customer) {
        this.editcustomer = customer;
        console.log(customer);
    }

    deletCustomer(id) {
        this.textileService.deleteCustomer(id).subscribe(
            value => {
                console.log('[GET] delete Customer successfully');
            },
            error1 => {
                console.log('FAIL to delete Customer!');
            },
            () => {
                this.textileService.getAllCustomer().subscribe(
                    (data) => {
                        this.getAllCu(data);
                    }
                );
            }
        );
    }

    editCustomer() {

        const date1 = new Date(this.editcustomer.registerDate);
        this.editcustomer.registerDate = date1;
        const date2 = new Date(this.editcustomer.lastCome);
        this.editcustomer.lastCome = date2;
        this.textileService.editCustomer(this.editcustomer).subscribe(
            value => {
                console.log('[POST] Update Customer successfully');
            },
            Error => {
                console.log('FAIL to create Customer!');
            },
            () => {
                this.textileService.getAllCustomer().subscribe(
                    (data) => {
                        this.getAllCu(data);
                    }
                );


            }
        );


    }

    zamenRegister() {
        this.editcustomer.zamen.push(this.zamen);
        console.log(this.editcustomer);
        this.textileService.editCustomer(this.editcustomer).subscribe(
            () => {
                console.log('successfull insert Zamen...');
            }
        );

    }

    searchCustomer(event) {
        this.textileService.SearchCustomer(event.target.value).subscribe(
            value => {
                this.searchedCu = value;
            }
        );
    }

    downloadFile(data: Response) {
        const blob = new Blob([data], {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    }

    printInformation(id) {

        this.isAllow = true;
        this.pdfsrc = 'http://localhost:8091/cu/customerInfoPrint/' + id;

        /*this.textileService.printInfoCustomer(id).subscribe(
            data => {
                console.log(data);
                this.nativeWindow.open(data);
            },
            error1 => {
                console.log('fail');
            },
            () => {
                console.log('complete');
            }
        );*/
    }
}
