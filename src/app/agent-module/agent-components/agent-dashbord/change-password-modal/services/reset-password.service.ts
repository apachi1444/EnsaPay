import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/commonCompos/commonServices/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  data = {
    ziko: String,
  };
  constructor(
    private http: HttpClient,
    private localeStorage: LocalStorageService
  ) {}

  resetPassword(newPass: any) {
    this.data.ziko = newPass;
    let final =
      environment.host +
      'user/resetpassword/' +
      this.localeStorage.getUserName();
    console.log(this.data);
    this.http
      .put(final, this.data, { responseType: 'text' })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
