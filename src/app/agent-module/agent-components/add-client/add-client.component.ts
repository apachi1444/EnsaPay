import { Component, OnInit } from '@angular/core';

import { AgentServiceService } from '../../agent-services/agent-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  Image:any
  constructor(private agentService:AgentServiceService) { }
   src:any
   nameImage:any="choose file"
  ngOnInit(): void {
  }
  File(event:any){
    let file=event.target.files[0]
    console.log(file)
    this.valider(file)
  }
  valider(file:any){
    let validFile = new RegExp("(png)|(jpg)|(jpeg)$");
    if(validFile.test(file.type)){
      this.Image=file
      let newFileReader=new FileReader();
      newFileReader.onload=(()=>{
        let imageUrl=newFileReader.result;
        this.src=newFileReader.result;
        this.nameImage=file.name
      });
      newFileReader.readAsDataURL(file)
    }
    else{
      alert("image must be jpg or png or jpeg" )
    }

  }
  
addClient(event:any){
const myForm = event.currentTarget;
const data = new FormData(myForm);
data.append("file",this.Image)
this.agentService.postClient(data)
}
suprrimerPhoto(){
  this.src=null;
  this.nameImage="choose file"
}
}
