import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-appp';

  constructor(private router:Router){}

  signUp(page:string):void{
    this.router.navigate(['${page}'])

  }
}
