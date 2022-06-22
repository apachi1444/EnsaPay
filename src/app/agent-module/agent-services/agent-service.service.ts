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
export class AgentServiceService {
  constructor(
    private tokenService: LoginServiceService,
    private localService: LocalStorageService,
    private http: HttpClient,
    private toast: NgToastService,
    private route: Router
  ) {}
  server = environment.host;
  //   public getPosts(): Observable<Array<Agent>> {
  //     return this.http.get<Array<Agent>>(
  //       'https://jsonplaceholder.typicode.com/todos/1'
  //     );
  //   }

  //   // let result = await this.service.getPosts();
  //   // result.subscribe((data) => {
  //   //   this.posts = data;
  //   // })
  // }

  agentUserName = this.localService.getUserName();
  getDataFromToken(): Observable<any> {
    let finalUrl = this.server + 'agent/profileAgent/' + this.agentUserName;
    return this.http.get<any>(finalUrl, {
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      },
    });
  }
  postClient(data: FormData) {
    console.log(data.get('file'));
    let finalUrl =
      this.server + 'client/regiterNewUserClient/' + localStorage.getItem('id');
    this.http
      .post(finalUrl, data, {
        responseType: 'text',
        headers: {
          Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
        },
      })
      .subscribe(
        (res) => {
          this.toast.success({
            detail: 'success',
            summary: res.toString(),
            duration: 5000,
          });
          this.route.navigateByUrl('/agent/profile');
        },
        (error) => {
          this.toast.error({
            detail: 'error',
            summary: 'cannot be added',
            duration: 5000,
          });
        }
      );
  }
  getClients(): Observable<any> {
    let finalUrl =
      this.server + 'agent/getClients/' + localStorage.getItem('id');
    return this.http.get<any>(finalUrl, {
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      },
    });
  }
  getsearchClient(f: any): Observable<any> {
    let finalUrl =
      this.server + 'agent/getClients/' + localStorage.getItem('id') + '/' + f;
    return this.http.get<any>(finalUrl, {
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      },
    });
  }
}
