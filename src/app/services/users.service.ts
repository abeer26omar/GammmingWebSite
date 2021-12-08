import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { usersArray } from '../user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  saveUsers(name: string, email: string,password: string,description: string){
    return this.http.post('https://gamming-website-default-rtdb.firebaseio.com/users.json',{
      name: name,
      email: email,
      password: password,
      description: description
    })
  }
  getUsers(){
     return this.http.get<Array<usersArray>>('https://gamming-website-default-rtdb.firebaseio.com/users.json')
     .pipe(
      map(responseData =>{
        const arrayUsers = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            arrayUsers.push({ ...responseData[key] , id: key})
          }
        }
        return arrayUsers;
      })
    )
  }
  getOneUser(id: string){
    return this.http.get<Array<usersArray>>(`https://gamming-website-default-rtdb.firebaseio.com/users/${id}`, {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        //  'mode': 'no-cors' 
        // // 'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      // 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
      
    })
    
  }
}
