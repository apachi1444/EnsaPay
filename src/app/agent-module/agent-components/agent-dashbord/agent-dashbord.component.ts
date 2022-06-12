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
    private toast:NgToastService
   
  ) {}
  FirstConnection:boolean=true;
  confirmPassword:any=true
  User: any = {};
  Password:any=true;

  ngOnInit(): void {
    this.dataService.getDataFromToken().subscribe((data) => {
      console.log(data);
      this.User = data;
    this.FirstConnection=this.User.firstConnection;
    });
  }

  doTheResetPassword(userForm: any) {
    
    if (userForm.password1 == userForm.password) {
      console.log( userForm.password1+" "+ userForm.password)
      
     this.resetPasswordService.resetPassword(userForm.password);
    
    }
    else{
       
    }
  }
 
    
 
}
