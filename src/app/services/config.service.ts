import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpParams,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ConfigService {
  API = "https://api.spaceXdata.com/v3/launches";
  httpOptions: any = {};
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      }),
    };
  }

  /**
   * ===================================================================================
   *                                  Server Calls start
   * ===================================================================================
   */

  /**
   *
   * @param queryParams - Limit,launch_year,launch_success and land_success
   *
   */

  public fetchlist(queryParams): Observable<any> {
    debugger;
    let requestParams = {
      limit: queryParams.limitValue,
      launch_year: queryParams.year,
      launch_success: queryParams.isLaunch,
      land_success: queryParams.isLand,
    };
    return this.http
      .get(this.API, {
        params: requestParams,
      })
      .pipe(catchError((error) => this.handleError(error, "ERROR")));
  }

  private handleError(
    response: HttpEvent<any>,
    message: string
  ): Observable<HttpEvent<any>> {
    throw response;
  }
}
