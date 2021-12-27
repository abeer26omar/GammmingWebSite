import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy {
  usersArayOfData : any[] = [];
  usersSub: Subscription | undefined ;
  constructor(private users: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.users.getUsers().subscribe(userData =>{
      this.usersArayOfData = userData;
      console.log(userData);
    })
  }
  playerDetails(id: string){
    this.router.navigate(['commingsoon', id])
  }
 ngOnDestroy(){
   this.usersSub?.unsubscribe()
 }
}
