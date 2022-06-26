import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CMIservice } from 'src/app/client-module/client-services/CMI/CMIServices';

@Component({
  selector: 'app-payment-sms',
  templateUrl: './payment-sms.component.html',
  styleUrls: ['./payment-sms.component.css'],
})
export class PaymentSmsComponent implements OnInit {
  constructor(private cmiService: CMIservice) {}
  @Output() public event = new EventEmitter<any>();
  next: any = true;

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
  sendValidateToken(form: NgForm) {
    this.cmiService
      .validateSendedToken(
        form.value.input1 +
          form.value.input2 +
          form.value.input3 +
          form.value.input4 +
          form.value.input5 +
          form.value.input6
      )
      .subscribe(
        (res) => {
          this.event.emit(this.next);
          this.next = false;
        },
        (error) => {
          console.log('token failed');
        }
      );
  }
}
