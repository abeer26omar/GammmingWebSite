import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GammingWebsite';
  sidebarOpen = true;

  toggle(){
    this.sidebarOpen = !this.sidebarOpen;
  }
  close(){
    this.sidebarOpen = !this.sidebarOpen;
  }
  constructor( public router: Router){
  }
  onActive(){
    window.scroll(0,0)
  }
}
