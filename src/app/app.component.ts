import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activerNavBar:boolean=false
  activerSocialNavBar:boolean=false

  activated(){
    this.activerNavBar=true
    this.activerSocialNavBar=true
  }
}
