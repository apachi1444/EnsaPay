import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CMIservice } from 'src/app/client-module/client-services/CMI/CMIServices';

@Component({
  selector: 'app-paiement-par-reference',
  templateUrl: './paiement-par-reference.component.html',
  styleUrls: ['./paiement-par-reference.component.css']
})
export class PaiementParReferenceComponent implements OnInit {

  @Input() ImpayQrCode:any;
 @Input() Creance:any;
 @Input() Creancier:any;
 dateToday: number = Date.now();
  constructor(private cmiService:CMIservice,private route:Router) { }

  ngOnInit(): void {
  }
  confirm(){
    this.cmiService.confirm(this.Creance,this.Creancier,this.ImpayQrCode.impay)

  }
  cancel(){
    this.route.navigateByUrl("/client/dashboard")

   }

}
