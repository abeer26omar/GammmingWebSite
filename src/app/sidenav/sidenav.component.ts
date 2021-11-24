import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() closeSideNav:EventEmitter<any> = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  closeNav(){
    this.closeSideNav.emit();
  }
  home(){
    this.router.navigate(['home']);
    this.closeNav();
  }
  games(){
    this.router.navigate(['games']);
    this.closeNav();
  }
}
