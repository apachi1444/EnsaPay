import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CMIservice } from 'src/app/client-module/client-services/CMI/CMIServices';

@Component({
  selector: 'app-do-paiement',
  templateUrl: './do-paiement.component.html',
  styleUrls: ['./do-paiement.component.css'],
})
export class DoPaiementComponent implements OnInit {
  constructor(private cmiservice:CMIservice) {}
  ngOnInit(): void {}
   @Input()  creancier:any
   @Input() creance:any
   @Output() public event =new EventEmitter<any>();
   @Input() isCompleted:any;
   

   send(f:NgForm){
    this.cmiservice.getImapy(f.name).subscribe((res)=>{
     if(res!=null){
      this.event.emit(res);
      this.isCompleted="";
     
      
     }
     else{
      console.log("refernce not found")
     }
  },
  (error)=>{
      console.log("refernce not found")
  })
}
   }
   


