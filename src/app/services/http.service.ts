import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable} from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse } from '../model';
import { Game } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(ordering: string,
    search?: string): Observable<APIResponse<Game>>{
      let params = new HttpParams().set('ordering', ordering);
      if(search){
        params = new HttpParams().set('ordering', ordering).set('search', search)
      }
    return this.http.get<APIResponse<Game>>(`${env.api_url}/games`, {params: params})
  }
  getDetails(id: string): Observable<Game>{
    const gameInfo = this.http.get(`${env.api_url}/games/${id}`);
    const gameTrailer = this.http.get(`${env.api_url}/games/${id}/movies`);
    const gameScreenShots = this.http.get(`${env.api_url}/games/${id}/screenshots`)

    return forkJoin({
      gameInfo,gameScreenShots,gameTrailer
    }).pipe(map((resp: any)=>{
      return{
        ...resp['gameInfo'],
        screenShots: resp['gameScreenShots']?.results,
        trailers: resp['gameTrailer']?.results,        
      } ;
    }))
  }
}
