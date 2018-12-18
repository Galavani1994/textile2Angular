import {Component, OnInit} from '@angular/core';
import {TextileService} from '../textile.service';
import {Customer} from '../model/customer';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    config = {
        format: 'YYYY/MM/DD'
    };
    customers = [];
    customer: Customer = {
        id: null, cuid: null, firstName: null, lastName: null, addressname: null, mande: null, mobileNum: null,
        phoneNum: null, descreption: null, registerDate: null, lastCome: null, zamen: null
    };

    constructor(private textileService: TextileService) {
    }

    ngOnInit() {
        this.textileService.getAllCustomer().subscribe(
            (data) => {
                this.getAllCu(data);
            }
        );

    }

    saveCustomer() {
        console.log(this.customer);
        const date = new Date(this.customer.registerDate);
        this.customer.registerDate = date;
        this.textileService.saveCustomer(this.customer).subscribe(
            value => {
                console.log('[POST] create Customer successfully', value);
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

    getAllCu(data) {
        return this.customers = data;
    }
}
