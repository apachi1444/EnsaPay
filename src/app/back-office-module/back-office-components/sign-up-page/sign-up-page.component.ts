import { Component, OnInit } from '@angular/core';
import { BackOffice } from 'src/app/Models/backOffice/BackOfficeModel';
import { BackOfficeService } from 'src/app/services/backOffice/backoffice-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  constructor(private service: BackOfficeService) {}
  message: string | undefined;
  user: BackOffice = new BackOffice('', '', '', '');
  ngOnInit(): void {}

  public registerNow() {
    console.log('object');
    let resp = this.service.doRegister(this.user);
    resp.subscribe((data) => (this.message = data.toString()));
  }
}
