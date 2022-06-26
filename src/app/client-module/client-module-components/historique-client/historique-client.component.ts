import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CMIservice } from '../../client-services/CMI/CMIServices';

@Component({
  selector: 'app-historique-client',
  templateUrl: './historique-client.component.html',
  styleUrls: ['./historique-client.component.css'],
})
export class HistoriqueClientComponent implements OnInit {
  constructor(private cmiService: CMIservice) {}
  Facture: any;
  pageSlice: any;
  lenght: any;

  ngOnInit(): void {
    this.cmiService.getAllFacture().subscribe(
      (res) => {
        this.Facture = res;
        console.log(res);

        this.pageSlice = this.Facture.slice(0, 3);
        this.lenght = this.Facture.length;
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
  search($event: any) {
    this.cmiService.getsearchFacture($event).subscribe(
      (res: any) => {
        this.Facture = res;
        console.log(res);
        this.pageSlice = this.Facture.slice(0, 3);
        this.lenght = this.Facture.length;
      },
      (err: any) => {
        console.log(err.error);
      }
    );
  }
  OnPageChange(event: PageEvent) {
    const start = event.pageIndex * event.pageSize;
    let end = start + event.pageSize;
    if (end > this.Facture.length) {
      end = this.Facture.length;
    }
    this.pageSlice = this.Facture.slice(start, end);
  }
}
