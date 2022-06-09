import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../../commonServices/login-service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  showPassword: boolean = false;
  passwordType: String = 'password';
  className: String = 'fas fa-eye';
  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {}

  log(x: any) {
    console.log(x);
  }

  togglePassword() {
    console.log('first');
    if (this.showPassword) {
      this.showPassword = !this.showPassword;
      this.passwordType = 'text';
      this.className = 'fas fa-eye-slash';
    } else {
      this.showPassword = !this.showPassword;
      this.passwordType = 'password';
      this.className = 'fas fa-eye';
    }
  }

  addStudent(userForm: NgForm) {
    this.loginService.authenticate(userForm);
    console.log(userForm);
  }
}
