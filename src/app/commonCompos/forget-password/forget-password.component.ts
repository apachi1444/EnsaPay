import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BackOfficeService } from 'src/app/back-office-module/back-office-services/backoffice-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private backOfficeService: BackOfficeService) {}

  ngOnInit(): void {}
  send(f: NgForm) {
    this.backOfficeService.sendMailToClient(f.value.username);
    
  }
}
