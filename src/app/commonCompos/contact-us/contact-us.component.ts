import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactUsService } from 'src/app/commonServices/ContactUsService/ContactUs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor(private contactService: ContactUsService) {}
  server = environment.host;
  ngOnInit(): void {}
  contactUs(forme: any) {
    this.contactService.Contact(forme);
  }
}
