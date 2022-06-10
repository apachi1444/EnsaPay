import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/commonServices/local-storage-service/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public locaStrorageservice: LocalStorageService) {}

  ngOnInit(): void {}
  deconnecter() {
    localStorage.clear();
  }
}
