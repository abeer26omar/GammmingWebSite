import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopUpVideoComponent } from './pop-up-video/pop-up-video.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signIn: boolean = false;
  constructor(private dialog: MatDialog, private router: Router) { }
  // private wowSubscription: Subscription;

  ngOnInit(): void {
    // this.wowService.init();
  }
  openVideo(){
    this.dialog.open(PopUpVideoComponent,{
      height:'500px',
      width: '700px',
    });
  }
  play(){
    if(this.signIn === true){
      this.router.navigate(['/games']);
    }
    else{
      this.router.navigate(['/signup'])
    }
  }
}
