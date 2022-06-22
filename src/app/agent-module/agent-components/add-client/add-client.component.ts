import { Component, OnInit } from '@angular/core';

import { AgentServiceService } from '../../agent-services/agent-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  sendData: boolean = true;
  Image: any;

  Zip: any = true;
  constructor(private agentService: AgentServiceService) {}
  src: any;
  nameImage: any = 'choose file';
  alert: boolean = false;
  showPassword: boolean = false;
  passwordType: String = 'password';
  className: String = 'fas fa-eye';

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

  addClient(event: any) {
    const myForm = event.currentTarget;
    const data = new FormData(myForm);
    data.append('file', this.Image);
    if (this.sendData) {
      this.agentService.postClient(data);
    }
  }
  suprrimerPhoto() {
    this.src = null;
    this.nameImage = 'choose file';
  }

  testZip(zip: any) {
    if (zip < 0) {
      return (this.Zip = false);
    }

    return (this.Zip = true);
  }
  disable(
    country: any,
    zip: any,
    city: any,
    cin: any,
    adresse: any,
    lastname: any,
    Firstname: any,
    email: any,
    phone: any,
    solde: any,
    image: any
  ): boolean {
    if (
      country ||
      zip ||
      cin ||
      city ||
      adresse ||
      lastname ||
      Firstname ||
      email ||
      phone ||
      solde ||
      image
    ) {
      return true;
    } else return false;
  }
}
