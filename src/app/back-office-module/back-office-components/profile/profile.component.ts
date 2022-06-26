import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ResetPasswordService } from 'src/app/agent-module/agent-components/agent-dashbord/change-password-modal/services/reset-password.service';
import { AgentServiceService } from 'src/app/agent-module/agent-services/agent-service.service';
import { BackOfficeService } from '../../back-office-services/backoffice-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  /*departments = [
    { title: 'yessine', id: 1 },
    { title: 'hafid', id: 2 },
  ];

  onSelect(dep: any) {
    this.router.navigate(['/profile'], dep.id);
  }*/
  constructor(
    private router: Router,
    private dataService: BackOfficeService,

    private toast: NgToastService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  FirstConnection: boolean = true;

  User: any = {};

  ngOnInit(): void {
    this.dataService.getDataFromToken().subscribe((data) => {
      this.User = data;
      localStorage.setItem('id', this.User.backofficeId);
    });
  }
}
