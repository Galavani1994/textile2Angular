import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ManagementsaleService {

    constructor(private http: HttpClient) {
    }

    getCustomer(id): Observable<any> {
        return this.http.get('http://localhost:8091/cu/findOneCustomer/' + id);
    }
    getProduction(id): Observable<any> {
        return this.http.get('http://localhost:8091/pr/findOneProduction/' + id);
    }
}
