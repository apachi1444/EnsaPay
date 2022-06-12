import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from '../../back-office-services/backoffice-service.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css'],
})
export class AddAgentComponent implements OnInit {
  Image: any;
  constructor(private backOfficeService: BackOfficeService) {}
  src: any;
  nameImage: any = 'choose file';
  ngOnInit(): void {}
  File(event: any) {
    let file = event.target.files[0];
    console.log(file);
    this.valider(file);
  }
  valider(file: any) {
    let validFile = new RegExp('(png)|(jpg)|(jpeg)$');
    if (validFile.test(file.type)) {
      this.Image = file;
      let newFileReader = new FileReader();
      newFileReader.onload = () => {
        let imageUrl = newFileReader.result;
        this.src = newFileReader.result;
        this.nameImage = file.name;
      };
      newFileReader.readAsDataURL(file);
    } else {
      alert('image must be jpg or png or jpeg');
    }
  }

  addBackOffice(event: any) {
    console.log(event.currentTarget);
    const myForm = event.currentTarget;
    const data = new FormData(myForm);
    data.append('file', this.Image);
    this.backOfficeService.postAgent(data);
  }
  suprrimerPhoto() {
    this.src = null;
    this.nameImage = 'choose file';
  }
}
