import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/commonServices/local-storage-service/local-storage.service';
import { LoginServiceService } from 'src/app/commonServices/login-service/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public locaStrorageservice: LocalStorageService,
    private loginService: LoginServiceService
  ) {}

  ngOnInit(): void {}
  deconnecter() {
    localStorage.clear();
  }

  redirectUser() {
    let role = this.locaStrorageservice.getRole();
    this.loginService.redirectUser(role);
  }
}
