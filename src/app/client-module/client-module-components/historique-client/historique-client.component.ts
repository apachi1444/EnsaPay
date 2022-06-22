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
