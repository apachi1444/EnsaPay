import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  finaUrl = environment.host;
  constructor(
    private Http: HttpClient,
    private toast: NgToastService,
    private localService: LocalStorageService
  ) {}
  data = {
    phone: String,
    message: String,
  };

  Contact(f: any) {
    this.data.phone = f.value.phone;
    this.data.message = f.value.message;

    this.Http.post(this.finaUrl + 'contactUs', this.data, {
      responseType: 'text',
    }).subscribe(
      () => {
        this.toast.success({
          detail: 'success',
          summary: 'message envoyé',
          duration: 5000,
        });
      },
      (error) => {
        this.toast.error({
          detail: 'error',
          summary: error.error,
          duration: 5000,
        });
      }
    );
  }
  getClientsMessage(): Observable<any> {
    let finalUrl = this.finaUrl + 'contactUs/' + localStorage.getItem('id');
    return this.Http.get<any>(finalUrl, {
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      },
    });
  }

  getsearchClientMessage(f: any): Observable<any> {
    let finalUrl =
      this.finaUrl + 'contactUs/' + localStorage.getItem('id') + '/' + f;
    return this.Http.get<any>(finalUrl, {
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      },
    });
  }
}
