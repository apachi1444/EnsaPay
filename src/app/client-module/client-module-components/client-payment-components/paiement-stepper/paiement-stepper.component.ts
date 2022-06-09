import { Component } from '@angular/core';

@Component({
  selector: 'app-paiement-stepper',
  templateUrl: './paiement-stepper.component.html',
  styleUrls: ['./paiement-stepper.component.css'],
})
export class PaiementStepperComponent {
  isCompleted = false;
  constructor() {}
  static fct() {
    console.log('hi');
  }
}
