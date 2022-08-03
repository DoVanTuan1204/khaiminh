import { HttpClient, HttpErrorResponse, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})



export class TestDataService {

  constructor(private httpClient:HttpClient,private tokenExtractor: HttpXsrfTokenExtractor) { }


private httpOptions :any = {
  Headers: new HttpHeaders({
    'Content-Type':'application/json',
   })
}


private REST_API_SERVER = "http://207.148.69.137:9999/api/v1"
// const x = this.exemplesRemboursementService.geTitre(this.garantieCourante);
keyBaere : any ={}
idProjectDelete : any
  public postData<T>( tentity: T) : Observable<any> {
    const url = `${this.REST_API_SERVER}/user/login`;
    console.log(tentity);
   return this.httpClient.post<any>(url,tentity);
  }


  getProject(){
    var reqHeader = new HttpHeaders({
        'Content-Type': 'json',
        'Authorization': `Bearer ${this.keyBaere.token}`
      });

     return this.httpClient.get(`${this.REST_API_SERVER}/project`, { headers: reqHeader });
}

  deleteProject(){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'json',
      'Authorization': `Bearer ${this.keyBaere.token}`
    });

   return this.httpClient.delete(`${this.REST_API_SERVER}/project/${this.idProjectDelete}`, { headers: reqHeader });
  }


}
