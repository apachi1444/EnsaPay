import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgToastService } from 'ng-angular-popup';

import { ContactUsService } from 'src/app/commonServices/ContactUsService/ContactUs';

@Component({
  selector: 'app-myclients-message',
  templateUrl: './myclients-message.component.html',
  styleUrls: ['./myclients-message.component.css'],
})
export class MyclientsMessageComponent implements OnInit {
  constructor(private contactUsserv: ContactUsService) {}
  Clients: any;
  pageSlice: any;
  lenght: any;
  ngOnInit(): void {
    this.contactUsserv.getClientsMessage().subscribe(
      (res) => {
        this.Clients = res;

        console.log(res);

        this.pageSlice = this.Clients.slice(0, 9);
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
  OnPageChange(event: PageEvent) {
    const start = event.pageIndex * event.pageSize;
    let end = start + event.pageSize;
    if (end > this.Clients.length) {
      end = this.Clients.length;
    }
    this.pageSlice = this.Clients.slice(start, end);
  }
  search($event: any) {
    this.contactUsserv.getsearchClientMessage($event).subscribe(
      (res: any) => {
        this.Clients = res;

        this.pageSlice = this.Clients.slice(0, 9);
        this.lenght = this.Clients.length;
      },
      (err: any) => {
        console.log(err.error);
      }
    );
  }
  deletemessage(id: any) {
    this.contactUsserv.deleteMessage(id);
  }
}
