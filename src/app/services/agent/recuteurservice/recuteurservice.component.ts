import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Recruteur } from 'src/app/Models/agent/model/recruteur';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({providedIn:"root"})
@Component({
  selector: 'app-recuteurservice',
  templateUrl: './recuteurservice.component.html',
  styleUrls: ['./recuteurservice.component.css']
})
export class RecuteurserviceComponent implements OnInit {

  constructor(private Http:HttpClient) { }

  ngOnInit(): void {
    
  }
  save(recruteur:Recruteur):Observable<Recruteur>{
    console.log(recruteur)
    let host=environment.host;
    return this.Http.post<Recruteur>(host+"/registerAgent",recruteur);


  }

}
