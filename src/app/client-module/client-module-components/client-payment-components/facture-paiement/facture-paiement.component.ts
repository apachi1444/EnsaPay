import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-facture-paiement',
  templateUrl: './facture-paiement.component.html',
  styleUrls: ['./facture-paiement.component.css'],
})
export class FacturePaiementComponent {
  isCompleted: boolean = false;
  @Output() public event =new EventEmitter<any>();
  toggleIsCompleted() {
    this.isCompleted = !this.isCompleted;
  }
  
  constructor() {}
  send(event:any){
    this.event.emit(event.value);
  }
}
