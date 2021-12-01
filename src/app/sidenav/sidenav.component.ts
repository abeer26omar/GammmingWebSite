import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() closeSideNav:EventEmitter<any> = new EventEmitter();
  logged: boolean = false;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.logged = user? true : false;
     //  console.log(user.email)
    })
  }
  closeNav(){
    this.closeSideNav.emit();
  }
 
  signUp(){
    this.router.navigate(['signin']);
    this.closeNav();
    this.logged = !this.logged;
  }
  logOut(){}
}
