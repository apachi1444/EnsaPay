import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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

        this.pageSlice = this.Clients.slice(0, 3);
        this.lenght = this.Clients.length;
      },
      (err: any) => {
        console.log(err.error);
      }
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
    this.contactUsserv.getsearchClientMessage($event).subscribe(
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
