import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';

import { LocalStorageService } from 'src/app/commonServices/local-storage-service/local-storage.service';
import { LoginServiceService } from 'src/app/commonServices/login-service/login-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CMIservice {
  constructor(
    private tokenService: LoginServiceService,
    private localService: LocalStorageService,
    private http: HttpClient,
    private route: Router,
    private toast: NgToastService
  ) {}
  server = environment.host;
  ClientUserName = this.localService.getUserName();
  getImapy(reference: any): Observable<String[]> {
    let finalUrl =
      this.server +
      'CMIservice/getImpay/' +
      this.ClientUserName +
      '/' +
      reference;
    return this.http.post<String[]>(
      finalUrl,
      { responseType: 'json' },
      {
        headers: {
          Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
        },
      }
    );
  }
  confirm(creance: any, creancier: any, impay: any) {
    let data = {
      impaye: Number,
      nameCreditor: String,
      nameDept: String,
    };
    data.impaye = impay;
    data.nameCreditor = creancier;
    data.nameDept = creance;
    let finalUrl =
      this.server + 'CMIservice/validatePayment/' + this.ClientUserName;
    this.http.post(finalUrl, data, { responseType: 'text' }).subscribe(
      (res) => {
        this.toast.success({
          detail: 'success',
          summary: 'paiement done ',
          duration: 5000,
        });
        this.route.navigateByUrl('/client/dashboard');
      },
      (error) => {
        this.toast.error({
          detail: 'error',
          summary: 'paiement failed',
          duration: 5000,
        });
      }
    );
  }
  getsearchFacture(f: any) {
    let finalUrl =
      this.server + 'CMIservice/factures/' + this.ClientUserName + '/' + f;
    return this.http.get<any>(finalUrl);
  }
  getAllFacture(): Observable<any> {
    console.log(this.ClientUserName);
    let finalUrl = this.server + 'CMIservice/factures/' + this.ClientUserName;
    return this.http.get<any>(finalUrl);
  }
  sendSMS(): Observable<any> {
    let finalUrl =
      this.server + 'CMIservice/getValidateToken/' + this.ClientUserName;
    return this.http.get<any>(finalUrl);
  }
  returnedTokenValidation: boolean = false;
  validateSendedToken(token: any): Observable<string> {
    let finalUrl =
      this.server +
      'CMIservice/validateToken/' +
      token +
      '/' +
      this.ClientUserName;
    return this.http.post(finalUrl, {}, { responseType: 'text' });
  }
}
