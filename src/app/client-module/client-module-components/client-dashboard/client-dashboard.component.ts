import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ResetPasswordService } from 'src/app/agent-module/agent-components/agent-dashbord/change-password-modal/services/reset-password.service';
import { ClientService } from '../../client-services/client.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css'],
})
export class ClientDashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: ClientService,
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
    });
  }

  doTheResetPassword(userForm: any) {
    if (userForm.password == userForm.newPass) {
      console.log(userForm);
      console.log('first');
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
