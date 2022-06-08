import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentServiceService } from '../../agent-services/agent-service.service';
import { NgForm, NgModel } from '@angular/forms';
//import { NgForm } from '@angular/forms';
import { ResetPasswordService } from './change-password-modal/services/reset-password.service';
@Component({
  selector: 'app-agent-dashbord',
  templateUrl: './agent-dashbord.component.html',
  styleUrls: ['./agent-dashbord.component.css'],
})
export class AgentDashbordComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: AgentServiceService,
    private resetPasswordService: ResetPasswordService
  ) {}

  User: any = {};

  ngOnInit(): void {
    this.dataService.getDataFromToken().subscribe((data) => {
      console.log(data);
      this.User = data;
    });
  }

  doTheResetPassword(userForm: NgForm) {
    if (userForm.value.password == userForm.value.newPass) {
      console.log(userForm.value);
      this.resetPasswordService.resetPassword(userForm.value);
    }
  }
}
