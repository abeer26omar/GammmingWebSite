import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  saveUser(name: string,email: string, password: string){
    this.http.post('https://gamming-website-default-rtdb.firebaseio.com/',{
      
    })
  }
}
