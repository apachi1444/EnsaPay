import { Component, OnInit } from '@angular/core';
import { BackofficeServiceService } from 'src/app/services/backOffice/backoffice-service.service';

// the component thell angular that i might use the injector
@Component({
  selector: 'app-list-back-offices',
  templateUrl: './list-back-offices.component.html',
  styleUrls: ['./list-back-offices.component.css'],
})
export class ListBackOfficesComponent implements OnInit {
  public backOffices = [];

  constructor(private _backOfficesService: BackofficeServiceService) {}

  ngOnInit() {
    // this.backOffices = this._backOfficesService.getBackoffices();
    this._backOfficesService
      .getBackoffices()
      .subscribe((data: any) => (this.backOffices = data));
  }
}
