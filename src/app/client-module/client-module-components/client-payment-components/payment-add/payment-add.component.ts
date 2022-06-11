import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css'],
})
export class PaymentAddComponent {
  
  isCompleted:boolean=false
  nextSelect:boolean=false
  next:boolean=false
 
  verif:any
  creancier:any
  creance:any

  ImpayQrCode:any;
  constructor(private route:Router) {}
 
  receive($event:any){
    this.isCompleted=true
   this.verif=$event[1]
   console.log(this.verif)
   this.creance=$event[0]
   this.creanceFunction();
  }
  creanceFunction(){
    if(this.creance=="TELEPHONIE ET INTERNET SIM" || this.creance=="PRODUIT INTERNET SIM" || this.creance=="PRODUIT FIXE SIM" 
    || this.creance=="PRODUIT MOBILE SIM" ){
      this.creancier="Maroc Telecom"
      
    }
    else if( this.creance=="FACTURE REDAL" ){
      this.creancier="Redal"
    }
    else if(this.creance=="FACTURES AMENDIS"){
      this.creancier="Amendis"

    }
  }
  checkCreanceAndCreancier(){
    console.log(this.creancier +"  et  "+this.creance)
  }
  receiveImpayQrCode($event:any){
    this.ImpayQrCode=$event;
    this.next=true
   
     }
     receiveAppselect(){
      this.nextSelect=true;
     }
     cancel(){
      this.route.navigateByUrl("/client/dashboard")

     }

}
 