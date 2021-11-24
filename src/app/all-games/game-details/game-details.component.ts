import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  //owl carousel
  screenShots: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<button><img width="17" height="24" src="../../../../assets/images/navigation-arrow2.webp" alt=""></button>', 
    '<button><img width="17" height="24" src="../../../assets/images/navigation-arrow1.webp" alt=""></button>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  trailers: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<button><img width="17" height="24" src="../../../../assets/images/navigation-arrow2.webp" alt=""></button>', 
    '<button><img width="17" height="24" src="../../../assets/images/navigation-arrow1.webp" alt=""></button>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  //getting data
  gameRating = 0;
  gameId: string = '';
  game: Game = {
    id: 0,
    background_image: '',
    name: '',
    released: '',
    metacritic_url: '',
    website: '',
    description_raw: '',
    metacritic: 0,
    rating: 0,
    twitch_count: 0,
    reviews_count: 0,
    game_series_count: 0,
    genres: [],
    parent_platforms: [],
    publishers: [],
    ratings: [],
    screenShots: [],
    trailers: []
  };
  routeSub: Subscription = new Subscription;
  gameSub: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private httpService: HttpService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }
  getGameDetails(id: string){
    this.gameSub = this.httpService.getDetails(id)
    .subscribe((gameResp: Game)=>{
      this.game = gameResp;
      console.log(gameResp);
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
