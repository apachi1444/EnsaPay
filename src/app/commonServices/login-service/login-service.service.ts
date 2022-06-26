import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

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

  authenticate(userForm: NgForm) {
    this.data.username = userForm.value.phoneNumber;
    this.data.userPassword = userForm.value.password;
    return this.http.post<any>(
      'http://localhost:8080/user/authenticate',
      this.data,
      {
        responseType: 'json',
      }
    );
  }

  redirectUser(role: any) {
    switch (role) {
      case 'ROLE_Agent':
        this.router.navigateByUrl('/agent/profile').then(() => {});

        break;
      case 'ROLE_Backoffice':
        this.router.navigateByUrl('/backOffice/profile').then(() => {});

        break;
      case 'ROLE_Client':
        this.router.navigateByUrl('/client/dashboard').then(() => {});

        break;

      default:
        break;
    }
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return this.localStorageService.getTokenLocalStorage();
  }

  logout() {
    this.localStorageService.removeItem('token');
    this.localStorageService.clearAll();
    this.router.navigateByUrl('');
  }
  public ismatch(allowedRoles: string): boolean {
    let match = false;
    const Usersroles = this.localStorageService.getRole();
    console.log(Usersroles);
    if (Usersroles != null && Usersroles) {
      if (Usersroles === allowedRoles) return true;
      else {
        return match;
      }
    }

    return match;
  }
}
