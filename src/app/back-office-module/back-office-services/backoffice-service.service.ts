import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/commonServices/local-storage-service/local-storage.service';
import { environment } from 'src/environments/environment';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class BackOfficeService {
  constructor(
    private http: HttpClient,
    private route: Router,

    private toast: NgToastService,
    private localService: LocalStorageService
  ) {}
  server = environment.host;
  public doRegister(user: any) {
    return this.http.post(this.server + 'backoffice/add', user, {
      responseType: 'text' as 'json',
    });
  }
  sendMailToClient(username: any) {
    this.http
      .post(this.server + 'forgetPassword/' + username, [], {
        responseType: 'text',
      })
      .subscribe(
        (res) => {
          console.log(res.toString());
          this.route.navigateByUrl('/agent/VerifyCode/' + username);
        },
        (error) => {
          console.log(error.error);
        }
      );
  }
  VerificationCode(username: any, code: any) {
    this.http
      .post(
        this.server + 'forgetPassword/checkToken/' + username + '/' + code,
        [],
        { responseType: 'text' }
      )
      .subscribe(
        (res) => {
          console.log(res.toString());
          this.route.navigateByUrl('/agent/newPassword/' + username);
        },
        (error) => {
          console.log(error.error);
        }
      );
  }
  newCode(username: any, password: any) {
    const data = {
      userPassword: String,
    };
    data.userPassword = password;
    this.http
      .post(this.server + 'forgetPassword/newPassword/' + username, data, {
        responseType: 'text',
      })
      .subscribe(
        (res) => {
          console.log(res.toString());
          this.route.navigateByUrl('/login');
        },
        (error) => {
          console.log(error.error);
        }
      );
  }

  backOfficeUserName = this.localService.getUserName();
  getDataFromToken(): Observable<any> {
    let finalUrl =
      this.server + 'backoffice/profileBackOffice/' + this.backOfficeUserName;
    return this.http.get<any>(finalUrl, {
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      },
    });
  }
  postAgent(data: FormData): Observable<any> {
    console.log(data.get('agentPhone'));
    let finalUrl =
      this.server + 'agent/regiterNewUserAgent/' + localStorage.getItem('id');
    return this.http.post(finalUrl, data, {
      responseType: 'text',
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      },
    });
  }
  getAgents(): Observable<any> {
    let finalUrl =
      this.server + 'backoffice/getAgents/' + localStorage.getItem('id');
    return this.http.get<any>(finalUrl, {
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      },
    });
  }
  getsearchAgents(f: any): Observable<any> {
    let finalUrl =
      this.server +
      'backoffice/getAgents/' +
      localStorage.getItem('id') +
      '/' +
      f;
    return this.http.get<any>(finalUrl, {
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      },
    });
  }
}
