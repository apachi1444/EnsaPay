import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AgentServiceService } from 'src/app/agent-module/agent-services/agent-service.service';
import { BackOfficeService } from '../../back-office-services/backoffice-service.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css'],
})
export class AddAgentComponent implements OnInit {
  sendData: boolean = true;
  Image: any;
  validusername: any;

  Zip: any = true;
  constructor(
    private backOfficeService: BackOfficeService,
    private toast: NgToastService,
    private route: Router
  ) {}
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

  addAgent(event: any) {
    console.log(event.currentTarget);
    const myForm = event.currentTarget;
    const data = new FormData(myForm);
    data.append('file', this.Image);
    if (this.sendData) {
      console.log(data.get('username'));
      this.backOfficeService.postAgent(data).subscribe(
        (res) => {
          this.toast.success({
            detail: 'success',
            summary: res.toString(),
            duration: 5000,
          });
          this.route.navigateByUrl('/backOffice/profile');
        },
        (error) => {
          if (error.error == 'username already exits') {
            this.validusername = false;
          } else {
            console.log(error.error);
            this.toast.error({
              detail: 'error',
              summary: 'cannot be added',
              duration: 5000,
            });
          }
        }
      );
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
      image
    ) {
      return true;
    } else return false;
  }
  insertusername($event: any) {
    this.validusername = true;
  }
}
