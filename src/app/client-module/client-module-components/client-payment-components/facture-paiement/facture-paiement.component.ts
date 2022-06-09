import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-facture-paiement',
  templateUrl: './facture-paiement.component.html',
  styleUrls: ['./facture-paiement.component.css'],
})
export class FacturePaiementComponent {
  isCompleted: boolean = false;
  toggleIsCompleted() {
    this.isCompleted = !this.isCompleted;
  }
  constructor() {}
}
