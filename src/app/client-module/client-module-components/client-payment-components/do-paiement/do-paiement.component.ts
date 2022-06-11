import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-do-paiement',
  templateUrl: './do-paiement.component.html',
  styleUrls: ['./do-paiement.component.css'],
})
export class DoPaiementComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
   @Input()  creancier:any
   @Input()  creance:any

}
