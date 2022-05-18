import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  constructor(private router: ActivatedRoute, private route: Router) {}
  public depId: any;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      let currentParamUrl = this.router.snapshot.paramMap.get('id');
      if (currentParamUrl != null) {
        this.depId = currentParamUrl;
      }
    });
  }

  goPrev() {
    let previousId: any = this.depId - 1;
    this.route.navigate(['/profile'], previousId);
    // this.route.navigate([`/profile/${previousId}`]);
    console.log('the prev function');
  }

  goNext() {
    let previousId = parseInt(this.depId + 1);
    this.route.navigate([`/profile/${previousId}`]);
    // this.route.navigate(['/profile'], previousId);
    console.log('the next function');
  }
}
