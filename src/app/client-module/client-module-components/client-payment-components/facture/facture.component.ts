import { Component, OnInit } from '@angular/core';
import { CMIservice } from 'src/app/client-module/client-services/CMI/CMIServices';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  constructor(private cmiService:CMIservice) { }
  

  ngOnInit(): void {
      
  }

  
}
