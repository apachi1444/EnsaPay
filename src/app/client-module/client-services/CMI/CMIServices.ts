import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";


import { LocalStorageService } from "src/app/commonServices/local-storage-service/local-storage.service";
import { LoginServiceService } from "src/app/commonServices/login-service/login-service.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
  })
  export class CMIservice {
    constructor(
      private tokenService: LoginServiceService,
      private localService: LocalStorageService,
      private http: 
      HttpClient,
      private route:Router
    ) {}
    server = environment.host;
    ClientUserName = this.localService.getUserName();
  getImapy(reference:any):Observable<String[]>{
    let finalUrl = this.server + 'CMIservice/getImpay/' + this.ClientUserName+"/"+reference;
    return this.http.post<String[]>(finalUrl,{responseType:'json'}, {
      headers: {
        Authorization: 'Bearer ' + this.localService.getTokenLocalStorage(),
      }
    });
  }
  confirm(creance:any,creancier:any,impay:any){
    let data={
      impaye:Number,
      nameCreditor:String,
      nameDept:String

    }
    data.impaye=impay
    data.nameCreditor=creancier
    data.nameDept=creance
    let finalUrl = this.server + 'CMIservice/validatePayment/' + this.ClientUserName;
    this.http.post(finalUrl,data,{responseType:'text'}).subscribe(
      (res)=>{
      console.log(res)
      this.route.navigateByUrl("/client/dashboard")
      },
      (error)=>{
        console.log(error.error)
      }
    )

  }
  getAllFacture():Observable<any>{
    let finalUrl = this.server + 'CMIservice/factures/' + this.ClientUserName;
   return this.http.get<any>(finalUrl);
  }
}