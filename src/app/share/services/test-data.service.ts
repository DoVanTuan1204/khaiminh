import { HttpClient, HttpErrorResponse, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})



export class TestDataService {


private httpOptions :any = {
  Headers: new HttpHeaders({
    'Content-Type':'application/json',
   })
}


private REST_API_SERVER = "http://207.148.69.137:9999/api/v1"

constructor(private httpClient:HttpClient,private tokenExtractor: HttpXsrfTokenExtractor) { }

  public postData<T>( tentity: T) : Observable<any> {
    const url = 'http://207.148.69.137:9999/api/v1/user/login';
    const token:any   = this.tokenExtractor.getToken() as string;
    console.log(tentity);

   return this.httpClient.post<any>(url,tentity);

  }


  getProject(){
    var reqHeader = new HttpHeaders({
        'Content-Type': 'json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5oYW4ubmd1eWVuMUBnbWFpbC5jb20iLCJleHAiOjE2NTkzNTExMzV9.p31W-NUz5tgznJMDf125WruSYtdo3WjtReJfN_aOTA0'
     });
    return this.httpClient.get('http://207.148.69.137:9999/api/v1/user/project', { headers: reqHeader });
}


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
