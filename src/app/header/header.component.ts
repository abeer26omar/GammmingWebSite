import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  logged: boolean = false;
  

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit(): void {
   this.authService.user.subscribe(user => {
     this.logged = user? true : false;
   })
  }

  toggleSidebar(){
    this.toggleSideBar.emit();
  }
  signin(){
    this.router.navigate(['signin']);
  }
  logOut(){
    // this.logged = !this.logged;
    // this.authService.logOut()
    // this.authService.user.next(null)
  }
  
  
}
