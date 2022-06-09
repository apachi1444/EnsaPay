import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css'],
})
export class PaymentAddComponent {
  isCompleted = false;
  constructor() {}
  static fct() {
    console.log('hi');
  }
}
