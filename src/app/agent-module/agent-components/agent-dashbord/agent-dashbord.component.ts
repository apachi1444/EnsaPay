import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-dashbord',
  templateUrl: './agent-dashbord.component.html',
  styleUrls: ['./agent-dashbord.component.css'],
})
export class AgentDashbordComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  btnClickToNavigateToForgetPasswordPage() {
    this.router.navigateByUrl('/agent/forgetPassword');
  }

  btnClickToNavigateToAddClientPage() {
    this.router.navigateByUrl('/agent/addClient');
  }
}
