import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Production} from './model/production';


@Injectable({
    providedIn: 'root'
})
export class TextileService {

    private static readonly POST_PRODUCTION_URL = 'http://localhost:8091/pr/savePr';
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
}
