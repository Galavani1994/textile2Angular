import {Component, OnInit} from '@angular/core';
import {TextileService} from '../textile.service';
import {Customer} from '../model/customer';
import {Zamen} from '../model/zamen';
import {textBinding} from '@angular/core/src/render3';


@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    constructor(private textileService: TextileService) {
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


    ngOnInit() {
        this.textileService.getAllCustomer().subscribe(
            (data) => {
                this.getAllCu(data);
            }
        );

    }

    saveCustomer() {
        console.log(this.customer);
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
        console.log(this.editcustomer);
        this.textileService.editCustomer(this.editcustomer).subscribe(
            value => {
                console.log('[POST] Update Customer successfully', value);
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
}
