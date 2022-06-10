import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackOfficeService } from 'src/app/back-office-module/back-office-services/backoffice-service.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css'],
})
export class VerifyCodeComponent implements OnInit {
  username: any;
  constructor(
    private route: ActivatedRoute,
    private backOfficeService: BackOfficeService
  ) {
    this.username = this.route.snapshot.params['username'];
  }

  ngOnInit(): void {}
  NewCode(f: NgForm) {
    this.backOfficeService.VerificationCode(
      this.username,
      f.value.un + f.value.deux + f.value.trois + f.value.quatre
    );
  }
}
