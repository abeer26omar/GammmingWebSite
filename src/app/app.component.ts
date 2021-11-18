import { Component } from '@angular/core';

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
}
