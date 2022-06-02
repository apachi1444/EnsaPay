import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  departments = [
    { title: 'yessine', id: 1 },
    { title: 'hafid', id: 2 },
  ];

  onSelect(dep: any) {
    this.router.navigate(['/profile'], dep.id);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
