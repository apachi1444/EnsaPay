import { Injectable } from '@angular/core';
import { BackOffice } from '../Models/backOffice/BackOfficeModel';

@Injectable({
  providedIn: 'root',
})
export class BackofficeServiceService {
  constructor() {}

  // the response that was returned from the server is returned
  // in the form of an observable

  // an observable is a sequence of items that arrive async over time
  // so once the service gets back the observable
  // it will convert it to the desired format
  // and provided it to every single component of our app => NO !
  // only to the ones who are using the service currently

  getBackoffices() {
    return [
      new BackOffice('yessine', 12, '1234534', 'yessine@gmail.com', 'uessine'),
      new BackOffice('yessine', 12, '1234534', 'yessine@gmail.com', 'uessine'),
      new BackOffice('yessine', 12, '1234534', 'yessine@gmail.com', 'uessine'),
    ];
  }
}
