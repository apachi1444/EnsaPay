import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

import { LocalStorageService } from 'src/app/commonCompos/commonServices/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  data = {
    userPassword: String,
  };
  constructor(
    private http: HttpClient,
    private localeStorage: LocalStorageService,
    private toast:NgToastService
  ) {}

  resetPassword(newPass: any) {
    this.data.userPassword = newPass;
    let final =
      environment.host +
      'user/resetpassword/' +
      this.localeStorage.getUserName();
    console.log(this.data);
    this.http
      .put(final, this.data, { responseType: 'text' })
      .subscribe((res) => {
        const toast = this.toast.success(
          {detail: res.toString(),
          duration:3000});
          
      },
      (error)=>{
        const toast = this.toast.error(
          {detail: error.error,
          duration:3000});
      })

      ;
  }
}
