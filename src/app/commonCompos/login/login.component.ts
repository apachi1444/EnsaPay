import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/commonServices/local-storage-service/local-storage.service';
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
  constructor(
    private loginService: LoginServiceService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

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

  redirectUser(role: any) {
    switch (role) {
      case 'ROLE_Agent':
        this.router.navigateByUrl('/agent/profile');
        break;
      case 'ROLE_Backoffice':
        this.router.navigateByUrl('/backOffice/profile');
        break;
      case 'ROLE_Client':
        this.router.navigateByUrl('/client/profile');
        break;

      default:
        break;
    }
  }

  addStudent(userForm: NgForm) {
    console.log('dsfds');
    this.loginService.authenticate(userForm).subscribe((res) => {
      console.log('result');
      this.localStorageService.setTokenLocalStorage(res.jwtToken);
      this.redirectUser(this.localStorageService.getRole());
    });
  }
}
