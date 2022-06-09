import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../commonServices/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService implements OnInit {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log('first');
  }

  data = {
    username: String,
    userPassword: String,
  };

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

  authenticate(userForm: NgForm) {
    this.data.username = userForm.value.phoneNumber;
    this.data.userPassword = userForm.value.password;

    this.http
      .post('http://localhost:1111/user/authenticate', this.data, {
        responseType: 'json',
      })
      .subscribe(
        (result: any) => {
          this.localStorageService.setTokenLocalStorage(result.jwtToken);
          console.log(this.localStorageService.getRole());
          this.redirectUser(this.localStorageService.getRole());
        },
        (error) => console.log(error.error)
      );
  }
}
