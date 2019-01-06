import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TextileService} from './textile.service';

@Injectable({
    providedIn: 'root'
})
export class ManagementsaleService {

    private static readonly MAIN_URL = 'http://localhost:8091/';
    private static readonly POST_CP_URL = ManagementsaleService.MAIN_URL + 'cp/saveCP';
    private static readonly POST_EDITCP_URL = ManagementsaleService.MAIN_URL + 'cp/editcp';
    private static readonly GET_CUSTOMER_URL = ManagementsaleService.MAIN_URL + 'cu/findOneCustomer/';
    private static readonly GET_PRODUCTION_URL = ManagementsaleService.MAIN_URL + 'pr/findOneProduction/';
    private static readonly GET_DELETE_CP_URL = ManagementsaleService.MAIN_URL + 'cp/deletCP/';

    private headers = new HttpHeaders({'Content-Type': 'application/json'});


    constructor(private http: HttpClient) {
    }

    getCustomer(id): Observable<any> {
        return this.http.get(ManagementsaleService.GET_CUSTOMER_URL + id);
    }

    getProduction(id): Observable<any> {
        return this.http.get(ManagementsaleService.GET_PRODUCTION_URL + id);
    }

    saveCp(cp) {
        return this.http.post(ManagementsaleService.POST_CP_URL, cp, {headers: this.headers});
    }

    deleteCP(id) {
        return this.http.get(ManagementsaleService.GET_DELETE_CP_URL + id);
    }

    editCp(cp) {
        return this.http.post(ManagementsaleService.POST_EDITCP_URL, cp, {headers: this.headers});
    }
}
