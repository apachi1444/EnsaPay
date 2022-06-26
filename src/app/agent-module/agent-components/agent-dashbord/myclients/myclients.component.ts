import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/agent-module/agent-services/agent-service.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-myclients',
  templateUrl: './myclients.component.html',
  styleUrls: ['./myclients.component.css'],
})
export class MyclientsComponent implements OnInit {
  constructor(private agentService: AgentServiceService) {}
  Clients: any;
  pageSlice: any;
  lenght: any;

  ngOnInit(): void {
    this.agentService.getClients().subscribe(
      (res) => {
        this.Clients = res;
        this.pageSlice = this.Clients.slice(0, 3);
        this.lenght = this.Clients.length;
      },
      (err: any) => {
        console.log(err.error);
      }
    );
  }
  calculateData(date: string): any {
    let dateCreate: any;

    dateCreate = new Date(date);
    let Now: any = new Date();

    let finalMonth: any = Now.getMonth() - dateCreate.getMonth();
    let finlaDay = Now.getDay() - dateCreate.getDay();
    let finlHours = Now.getHours() - dateCreate.getHours();
    let finlMinutes = Now.getMinutes() - dateCreate.getMinutes();
    let finlSeconds = Now.getSeconds() - dateCreate.getSeconds();
    if (finalMonth > 0) {
      return finalMonth + ' months ago';
    }
    if (finlaDay > 0) {
      return finlaDay + ' days ago';
    }
    if (finlHours > 0) {
      return finlHours + ' hours ago';
    }
    if (finlMinutes > 0) {
      return finlMinutes + ' minutes ago';
    }
    if (finlSeconds > 0) {
      return finlSeconds + ' seconds ago';
    }
  }
  parseDate(date: string): any {
    let dateCreate = new Date(date);
    return (
      dateCreate.getDate() +
      '/' +
      dateCreate.getMonth() +
      '/' +
      dateCreate.getFullYear()
    );
  }
  OnPageChange(event: PageEvent) {
    const start = event.pageIndex * event.pageSize;
    let end = start + event.pageSize;
    if (end > this.Clients.length) {
      end = this.Clients.length;
    }
    this.pageSlice = this.Clients.slice(start, end);
  }
  search($event: any) {
    this.agentService.getsearchClient($event).subscribe(
      (res: any) => {
        this.Clients = res;

        this.pageSlice = this.Clients.slice(0, 3);
        this.lenght = this.Clients.length;
      },
      (err: any) => {
        console.log(err.error);
      }
    );
  }
}
