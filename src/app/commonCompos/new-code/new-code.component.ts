import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackOfficeService } from 'src/app/back-office-module/back-office-services/backoffice-service.service';

@Component({
  selector: 'app-new-code',
  templateUrl: './new-code.component.html',
  styleUrls: ['./new-code.component.css']
})
export class NewCodeComponent implements OnInit {
username:any
  constructor(private backOfficeServer:BackOfficeService,private route:ActivatedRoute) {
    this.username=this.route.snapshot.params["username"]
   }

  ngOnInit(): void {
  }
  newcode(f:NgForm){
   if(f.value.password==f.value.confirmPassword){
     this.backOfficeServer.newCode(this.username,f.value.password)
   }
   else{
     console.log("confirm password incorrect")
   }
  }

}
