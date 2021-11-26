import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  logged = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSideBar.emit();
  }
  signUp(){
    // this.route.navigate(['signin']);
    this.logged = !this.logged;
  }
  logOut(){
    this.logged = !this.logged;
  }
}
