import { Component, OnInit } from '@angular/core';
import { CMIservice } from '../../client-services/CMI/CMIServices';

@Component({
  selector: 'app-historique-client',
  templateUrl: './historique-client.component.html',
  styleUrls: ['./historique-client.component.css']
})
export class HistoriqueClientComponent implements OnInit {

  constructor(private cmiService:CMIservice) { }
Facture:any
  ngOnInit(): void {
    this.cmiService.getAllFacture().subscribe(
      (res:any)=>{
        this.Facture=res
        console.log(res)
      },
      (err:any)=>{
        console.log(err.error)
      }
     )
    }
  }


