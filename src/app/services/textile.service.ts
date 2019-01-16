import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Production} from '../model/production';
import {Customer} from '../model/customer';
import {Zamen} from '../model/zamen';


@Injectable({
    providedIn: 'root'
})
export class TextileService {

    private static readonly MAIN_URL = 'http://localhost:8091/';

    // cu
    private static readonly GET_CUSTOMER_URL = TextileService.MAIN_URL + 'cu/customerPage';
    private static readonly GET_DELETE_CUSTOMER_URL = TextileService.MAIN_URL + 'cu/deleteCu/';
    private static readonly POST_CUSTOMER_URL = TextileService.MAIN_URL + 'cu/saveCu';
    private static readonly GET_SEARCH_CUSTOMER_URL = TextileService.MAIN_URL + 'cu/resultCu/';
    private static readonly GET_INFO_CUSTOMER_URL = TextileService.MAIN_URL + 'cu/customerInfoPrint/';

    // pr
    private static readonly GET_DELETE_PRODUCTION_URL = TextileService.MAIN_URL + 'pr/deletePr/';
    private static readonly GET_SEARCH_PRODUCTION_URL = TextileService.MAIN_URL + 'pr/resultPr/';
    private static readonly GET_PRODUCTION_URL = TextileService.MAIN_URL + 'pr/productionPage';
    private static readonly POST_PRODUCTION_URL = TextileService.MAIN_URL + 'pr/savePr';

    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }

    getAllProduction(): Observable<any> {
        return this.http.get(TextileService.GET_PRODUCTION_URL);
    }

    getAllCustomer(): Observable<any> {
        return this.http.get(TextileService.GET_CUSTOMER_URL);
    }

    saveProduction(production: Production) {
        return this.http.post(TextileService.POST_PRODUCTION_URL, production, {headers: this.headers});
    }


    deleteProduction(production: Production) {
        return this.http.get(TextileService.GET_DELETE_PRODUCTION_URL + production.id);
    }


    saveCustomer(customer) {
        return this.http.post(TextileService.POST_CUSTOMER_URL, customer, {headers: this.headers});
    }

    editCustomer(customer) {
        return this.http.post(TextileService.POST_CUSTOMER_URL, customer, {headers: this.headers});
    }

    deleteCustomer(id) {
        return this.http.get(TextileService.GET_DELETE_CUSTOMER_URL + id);
    }

    SearchProduction(value) {
        return this.http.get(TextileService.GET_SEARCH_PRODUCTION_URL + value);
    }

    SearchCustomer(value) {
        return this.http.get(TextileService.GET_SEARCH_CUSTOMER_URL + value);
    }

    printInfoCustomer(id) {
        return this.http.get(TextileService.GET_INFO_CUSTOMER_URL + id);
    }


}
