import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CMIservice } from 'src/app/client-module/client-services/CMI/CMIServices';

@Component({
  selector: 'app-facture-paiement',
  templateUrl: './facture-paiement.component.html',
  styleUrls: ['./facture-paiement.component.css'],
})
export class FacturePaiementComponent implements OnInit {
  isCompleted: boolean = false;
  data:Array<any>=[]
  @Output() public event =new EventEmitter<any>();
  toggleIsCompleted() {
    this.isCompleted = !this.isCompleted;
  }
  constructor(private cmiService:CMIservice) { }
  Facture:any;
  send(event:any){
    this.data.push(event.value)
    this.data.push("ok")
    this.event.emit(this.data);
  }
  ngOnInit(): void {
    this.cmiService.getAllFacture().subscribe(
      (res:any)=>{
        this.Facture=res
        console.log(res)
      },
      (err:any)=>{
        console.log(err.error)
      }
     )
    }
  }

