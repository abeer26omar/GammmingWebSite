import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() closeSideNav:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  closeNav(){
    this.closeSideNav.emit();

  }
}
