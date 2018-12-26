import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Production} from './model/production';
import {Customer} from './model/customer';
import {Zamen} from './model/zamen';


@Injectable({
    providedIn: 'root'
})
export class TextileService {

    private static readonly POST_PRODUCTION_URL = 'http://localhost:8091/pr/savePr';
    static readonly POST_CUSTOMER_URL = 'http://localhost:8091/cu/saveCu';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }

    getAllProduction(): Observable<any> {
        return this.http.get('http://localhost:8091/pr/productionPage');
    }

    saveProduction(production: Production) {
        return this.http.post(TextileService.POST_PRODUCTION_URL, production, {headers: this.headers});
    }


    deleteProduction(production: Production) {
        return this.http.get('http://localhost:8091/pr/deletePr/' + production.id);
    }

    getAllCustomer(): Observable<any> {
        return this.http.get('http://localhost:8091/cu/customerPage');
    }

    saveCustomer(customer) {
        return this.http.post(TextileService.POST_CUSTOMER_URL, customer, {headers: this.headers});
    }

    editCustomer(customer) {
        return this.http.post(TextileService.POST_CUSTOMER_URL, customer, {headers: this.headers});
    }

    deleteCustomer(id) {
        return this.http.get('http://localhost:8091/cu/deleteCu/' + id);
    }


}
