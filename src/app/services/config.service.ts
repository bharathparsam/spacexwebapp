import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ConfigService {
     API: string = 'https://api.spaceXdata.com/v3/launches';
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

     // https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true
     // https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014
     public fetchlist(queryParams): Observable<any> {
        // limitValue: any,isLaunch: any,isLand: any, year: any
        console.log(queryParams);
        let requestParams = {
            limit: queryParams.limitValue
        };
        if (queryParams.isLaunch !== '') {
            requestParams = {...requestParams, ...{ launch_success : queryParams.isLaunch}};
        }
        if (queryParams.isLand !== ''){
            requestParams = {...requestParams, ...{ land_success : queryParams.isLand}};
        }
        if (queryParams.year !== '') {
            requestParams = {...requestParams, ...{ launch_year: queryParams.year}};
        }


        console.log(requestParams);
        return this.http.get(this.API, {
            params: requestParams
        })
            .pipe(
                catchError(error => this.handleError(error, 'ERROR'))
            );
    }

    private handleError(response: HttpEvent<any>, message: string): Observable<HttpEvent<any>> {
        throw response;
    }


}