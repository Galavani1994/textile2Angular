import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TextileService} from './textile.service';

@Injectable({
    providedIn: 'root'
})
export class ManagementsaleService {

    static readonly POST_CP_URL = 'http://localhost:8091/cp/saveCP';

    private headers = new HttpHeaders({'Content-Type': 'application/json'});


    constructor(private http: HttpClient) {
    }

    getCustomer(id): Observable<any> {
        return this.http.get('http://localhost:8091/cu/findOneCustomer/' + id);
    }

    getProduction(id): Observable<any> {
        return this.http.get('http://localhost:8091/pr/findOneProduction/' + id);
    }

    saveCp(cp) {
        return this.http.post(ManagementsaleService.POST_CP_URL, cp, {headers: this.headers});
    }
}
