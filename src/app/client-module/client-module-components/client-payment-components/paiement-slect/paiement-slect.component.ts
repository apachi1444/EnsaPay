import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from 'src/app/commonServices/local-storage-service/local-storage.service';

@Component({
  selector: 'app-paiement-slect',
  templateUrl: './paiement-slect.component.html',
  styleUrls: ['./paiement-slect.component.css']
})
export class PaiementSlectComponent implements OnInit {

  constructor() { }
  
  @Output() public event =new EventEmitter<any>();
 @Input() ImpayQrCode:any;
 @Input() Creance:any;
 @Input() Creancier:any;
 isValid:boolean=false

  ngOnInit(): void {

  }
  checkQrCode(f:NgForm){
  
    if(this.ImpayQrCode.QrCode==f.value.un+f.value.deux+f.value.trois+f.value.quatre){
            this.isValid=true
            this.event.emit(this.isValid)
    }
    else{
      console.log("try again")
    }
  }


}
