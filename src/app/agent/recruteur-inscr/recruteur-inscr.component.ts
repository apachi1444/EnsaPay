import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecuteurserviceComponent } from '../../services/agent/recuteurservice/recuteurservice.component';

@Component({
  selector: 'app-recruteur-inscr',
  templateUrl: './recruteur-inscr.component.html',
  styleUrls: ['./recruteur-inscr.component.css']
})
export class RecruteurInscrComponent implements OnInit {
  forme?:FormGroup;
  constructor(private fb:FormBuilder,private recruteurservice:RecuteurserviceComponent) { }

  ngOnInit(): void {
    this.forme=this.fb.group({
      nom:["",Validators.required],
      password:["",Validators.required],
      confirm_password:["",Validators.required],
      email:["",Validators.required],
      accept:[true,Validators.required]
      

  });
}
  onsave(){
    if (this.forme?.invalid) return alert("echec");
  this.recruteurservice.save(this.forme?.value).subscribe((data)=>{
    alert("added")});
  
 
}
}

