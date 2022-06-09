// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';
// import { BackOffice } from '../../Models/backOffice/BackOfficeModel';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

// @Injectable({
//   providedIn: 'root',
// })
// export class BackofficeServiceService {
//   private _url: string = 'https://jsonplaceholder.typicode.com/todos/1';

//   constructor(private http: HttpClient) {}

//   // the response that was returned from the server is returned
//   // in the form of an observable

//   // an observable is a sequence of items that arrive async over time
//   // so once the service gets back the observable
//   // it will convert it to the desired format
//   // and provided it to every single component of our app => NO !
//   // only to the ones who are using the service currently

//   getBackoffices(): Observable<BackOffice[]> {
//     // return [
//     //   new BackOffice('yessine', 12, '1234534', 'yessine@gmail.com', 'uessine'),
//     //   new BackOffice('yessine', 12, '1234534', 'yessine@gmail.com', 'uessine'),
//     //   new BackOffice('yessine', 12, '1234534', 'yessine@gmail.com', 'uessine'),
//     // ];
//     return this.http.get<BackOffice[]>(this._url).catch(this.handleError);
//   }

//   handleError(error: HttpErrorResponse): void {
//     return Observable.throw(error.message || 'Server Error');
//   }
// }

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackOfficeService {
  constructor(private http: HttpClient) {}

  public doRegister(user: any) {
    return this.http.post('http://localhost:8081/backoffice/add', user, {
      responseType: 'text' as 'json',
    });
  }
  sendMailToClient(username:any){

   this.http.post("http://localhost:1111/forgetPassword/"+username,[],{responseType:'text'}).subscribe(
    (res)=>{console.log(res.toString())},
    (error)=>{error.errors})
  }
}
