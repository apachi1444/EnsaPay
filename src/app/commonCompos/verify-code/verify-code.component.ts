import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  NewCode(){
    alert("d");
  }

}
