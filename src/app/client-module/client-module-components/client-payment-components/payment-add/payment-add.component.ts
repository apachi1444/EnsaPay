import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css'],
})
export class PaymentAddComponent {
  isCompleted = false;
  creancier:any
  creance:any
  constructor() {}
  static fct() {
    console.log('hi');
  }
  receive($event:any){
   this.creance=$event
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
}
 