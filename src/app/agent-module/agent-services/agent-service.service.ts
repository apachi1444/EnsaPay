import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    private http: HttpClient
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
}
