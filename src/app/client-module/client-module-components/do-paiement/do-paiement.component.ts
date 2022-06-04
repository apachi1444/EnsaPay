import { Component, OnInit } from '@angular/core';
import { PaiementStepperComponent } from '../paiement-stepper/paiement-stepper.component';
@Component({
  selector: 'app-do-paiement',
  templateUrl: './do-paiement.component.html',
  styleUrls: ['./do-paiement.component.css'],
})
export class DoPaiementComponent implements OnInit {
  constructor() {}
  fct1() {
    PaiementStepperComponent.fct();
  }
  ngOnInit(): void {}
}
