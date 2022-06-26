import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentServiceService } from '../../agent-services/agent-service.service';
import { NgForm, NgModel } from '@angular/forms';
//import { NgForm } from '@angular/forms';
import { ResetPasswordService } from './change-password-modal/services/reset-password.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-agent-dashbord',
  templateUrl: './agent-dashbord.component.html',
  styleUrls: ['./agent-dashbord.component.css'],
})
export class AgentDashbordComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: AgentServiceService,
    private resetPasswordService: ResetPasswordService,
    private toast: NgToastService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  FirstConnection: boolean = true;

  User: any = {};

  ngOnInit(): void {
    this.dataService.getDataFromToken().subscribe((data) => {
      console.log(data);
      this.User = data;
      this.FirstConnection = this.User.firstConnection;
      localStorage.setItem('id', this.User.agentId);
    });
  }

  doTheResetPassword(userForm: any) {
    if (userForm.password == userForm.newPass) {
      console.log(userForm);
      this.resetPasswordService.resetPassword(userForm.password);
    } else {
      this.toast.error({
        detail: 'confirm password incorrect',
        duration: 3000,
      });
      console.log('confirm passwor incorrect');
    }
  }
  changePassword(f: NgForm) {
    if (f.value.confirm == f.value.confirmPass) {
      this.resetPasswordService.changePassword(
        f.value.newPass,
        f.value.confirm
      );
    } else {
      console.log('confirm password incorrect');
    }
  }
}
