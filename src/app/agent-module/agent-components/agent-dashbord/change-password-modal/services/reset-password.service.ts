import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

import { LocalStorageService } from 'src/app/commonCompos/commonServices/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
 
  constructor(
    private http: HttpClient,
    private localeStorage: LocalStorageService,
    private toast:NgToastService
  ) {}

  resetPassword(newPass: any) {
   let data = {
      userPassword: String,
    };
    data.userPassword = newPass;
    let final =
      environment.host +
      'user/resetpassword/' +
      this.localeStorage.getUserName();
    console.log(data);
    this.http
      .put(final, data, { responseType: 'text' })
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
  changePassword(Pass:any,confirmNewPass:any) {
    let data = {
      password: String,
      confirmPassword:String

    };
    data.password = Pass;
    data.confirmPassword=confirmNewPass
    console.log(data)
    let final =
      environment.host +
      'user/changePassword/' +
      this.localeStorage.getUserName();
   
    this.http
      .put(final, data, { responseType: 'text' })
      .subscribe((res) => {
        const toast = this.toast.success(
          {detail: res.toString(),
          duration:3000});
          console.log(res.toString())
      },
      (error)=>{
        const toast = this.toast.error(
          {detail: error.error,
          duration:3000});
          console.log(error.error)

      })

      ;
  }
}
