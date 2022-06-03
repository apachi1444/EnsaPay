import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgentServiceService {
  constructor() {}
  // import { Component, Injectable, OnInit } from '@angular/core';
  // import { HttpClient } from '@angular/common/http';
  // import { Agent } from 'src/app/agent-module/agent-model/Agent';
  // import { Observable } from 'rxjs';
  // import { environment } from 'src/environments/environment';
  // @Injectable({ providedIn: 'root' })
  // @Component({
  //   selector: 'app-recuteurservice',
  //   templateUrl: './agentService.component.html',
  //   styleUrls: ['./agentService.component.css'],
  // })
  // export class RecuteurserviceComponent implements OnInit {
  //   constructor(private http: HttpClient) {}

  //   ngOnInit(): void {}
  //   save(Agent: Agent): Observable<Agent> {
  //     console.log(Agent);
  //     let host = environment.host;
  //     return this.http.post<Agent>(host + '/registerAgent', Agent);
  //   }

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
}
