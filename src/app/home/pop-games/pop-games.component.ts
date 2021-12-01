import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-games',
  templateUrl: './pop-games.component.html',
  styleUrls: ['./pop-games.component.css']
})
export class GamesComponent implements OnInit {
  public sort: string ='';
  public games: Array<Game> = [];
  error: string = '';

  private routeSub: Subscription = new Subscription;
  private gameSub: Subscription = new Subscription;
  constructor(private httpService: HttpService, 
    private route: ActivatedRoute,
    private router: Router) { 

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
    }, (error:HttpErrorResponse) =>{
      if(error.error){
        setTimeout(() => {
          this.error = 'An unknown Error Occurred Check your Internet Connection Or Reload Your Page';
        }, 2000);
        // console.log('An unknown Error Occurred Check your Internet Connection Or Reload Your Page')
      }
    })
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
