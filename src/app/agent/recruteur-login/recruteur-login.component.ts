import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruteur-login',
  templateUrl: './recruteur-login.component.html',
  styleUrls: ['./recruteur-login.component.css'],
})
export class RecruteurLoginComponent implements OnInit {
  alert: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  log(x: any) {
    console.log(x);
  }
}
