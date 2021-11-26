import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from '../model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit{
  
  searchText: string = '';
 public sort: string = '';
 public games: Array<Game> = [];

 private routeSub: Subscription = new Subscription;
 private gameSub: Subscription = new Subscription;

  constructor( private httpService: HttpService, 
    private route: ActivatedRoute,
    private router: Router) {
    this.sort = 'Select Category';
   }
  
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params)=>{
      if(params['game-search']){
        this.searchGames('metacrit', params['game-search'])
      } else{
        this.searchGames('metacrit');
      }
    })
  }
  searchGames(sort: string, search?: string){
    this.gameSub = this.httpService
    .getGameList(sort, search)
    .subscribe((gameList: APIResponse<Game>)=>{
      this.games = gameList.results;
      console.log(gameList);
      // console.log(gameList.results.length);
    })
  }
  onSubmit(){
// console.log(this.searchText)
  }

  gameDetails(id: number){
    this.router.navigate(['gamedetails', id])
  }
  ngOnDestory() :void{
     if(this.gameSub){
       this.gameSub.unsubscribe();
     }
     if(this.routeSub){
      this.routeSub.unsubscribe();
    }
   }
}
