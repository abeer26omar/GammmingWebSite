import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  
 searchText: any;
 public sort: string = '';
 public games: Array<Game> = [];

 loadding = false;
 error: string = '';

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
    this.loadding = true;
    this.gameSub = this.httpService
    .getGameList(sort, search)
    .subscribe((gameList: APIResponse<Game>)=>{
      setTimeout(() => {
        this.loadding = false;
        this.games = gameList.results;
      }, 2000);
      // console.log(gameList);
      // console.log(gameList.results.length);
    }, (error :HttpErrorResponse) => {
      if(error.error){
        setTimeout(() => {
          this.loadding = false;
          this.error = 'An unknown Error Occurred Check your Internet Connection Or Reload Your Page';
        }, 2000);
        // console.log('An unknown Error Occurred Check your Internet Connection Or Reload Your Page')
      }
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
