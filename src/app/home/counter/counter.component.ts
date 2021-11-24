import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  streams: number = 0;
  twitch: number = 0;
  youtube: number = 0;
  team: number = 0;

  public sort: string ='';
  public games: number = 0;
 
  private routeSub: Subscription = new Subscription;
  private gameSub: Subscription = new Subscription;
  constructor(private httpService: HttpService, 
    private route: ActivatedRoute,
    private router: Router) { }

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
      this.games = gameList.results.length * 7;
    })
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
