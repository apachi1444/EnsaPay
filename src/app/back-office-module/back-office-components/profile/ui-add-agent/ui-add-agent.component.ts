import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from 'src/app/back-office-module/back-office-services/backoffice-service.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-ui-add-agent',
  templateUrl: './ui-add-agent.component.html',
  styleUrls: ['./ui-add-agent.component.css'],
})
export class UiAddAgentComponent implements OnInit {
  constructor(private backoffice: BackOfficeService) {}
  Agents: any;
  pageSlice: any;
  lenght: any;
  ngOnInit(): void {
    this.backoffice.getAgents().subscribe(
      (res) => {
        this.Agents = res;
        console.log(res);

        this.pageSlice = this.Agents.slice(0, 3);
        this.lenght = this.Agents.length;
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
    if (end > this.Agents.length) {
      end = this.Agents.length;
    }
    this.pageSlice = this.Agents.slice(start, end);
  }
  search($event: any) {
    this.backoffice.getsearchAgents($event).subscribe(
      (res: any) => {
        this.Agents = res;

        this.pageSlice = this.Agents.slice(0, 3);
        this.lenght = this.Agents.length;
      },
      (err: any) => {
        console.log(err.error);
      }
    );
  }
}
