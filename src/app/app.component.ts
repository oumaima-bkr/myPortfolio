import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activerNavBar:boolean=true
  activerSocialNavBar:boolean=true

  activated(){
    this.activerNavBar=true
    this.activerSocialNavBar=true
  }
}
