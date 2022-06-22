import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-sms',
  templateUrl: './payment-sms.component.html',
  styleUrls: ['./payment-sms.component.css'],
})
export class PaymentSmsComponent implements OnInit {
  constructor() {}

  onDigitInput(event: any) {
    let element;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null) return;
    else element.focus();
  }

  ngOnInit(): void {}
}
