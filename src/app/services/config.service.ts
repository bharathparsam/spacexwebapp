import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ConfigService {
     API:string = 'https://api.spaceXdata.com/v3/launches';

    httpOptions: any = {};
    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            })
        };
    }

    /**
     * ===================================================================================
     *                                  Server Calls start
     * ===================================================================================
     */
    public fetchlist(query: any): Observable<any> {
        let params = new HttpParams();
        params.set('limit', '100');
        return this.http.get(this.API, query)
            .pipe(
                catchError(error => this.handleError(error, 'ERROR'))
            )
    }

    private handleError(response: HttpEvent<any>, message: string): Observable<HttpEvent<any>> {
        throw response;
    }


}