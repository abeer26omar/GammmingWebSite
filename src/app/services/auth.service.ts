import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { User } from '../user.model';

interface authResponse{
  idToken: string,
  email:string,
  name: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}
interface reset{
  email: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>()

  constructor(private http: HttpClient) { }
  //SignUp
  signUp(name: string,email: string, password: string){
    return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAop5M5TQZHSh_JdQgazrFIGuFzOKHaMe8',{
      name: name,
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handelError), 
    
    tap(resData => {
      this.handelAuth(resData.name,resData.email, resData.localId, resData.idToken, +resData.expiresIn)
      localStorage.setItem('user', JSON.stringify(resData))
    }))
  }
  //signIn
  signIn(email: string, password: string){
    return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAop5M5TQZHSh_JdQgazrFIGuFzOKHaMe8',{
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handelError), 

    tap(resData => {
      this.handelAuth(resData.name,resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }))
  }
  //reset password
  forgetPassword(requestType: string, email: string){
    return this.http.post<reset>('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAop5M5TQZHSh_JdQgazrFIGuFzOKHaMe8',{
      requestType:requestType,
      email:email
    })
    .pipe(catchError(this.handelError))
  }
  //logOut
  logOut(){
    // const user = new User(
    //   null, 
    //   null,
    //   null,
    //   null);
    // this.user.next(user)   
  }

  private handelAuth(name: string,email: string, userId: string, token: string, expiresIn: number){
    
    const experationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      name,
      email, 
      userId,
      token,
      experationDate);
    this.user.next(user)  
  }

  private handelError(errorRes: HttpErrorResponse){
    let errorMsg = 'An unknown Error Occurred';
      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMsg);
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMsg = 'Email Already Exists!'
          break;
        case 'EMAIL_NOT_FOUND':  
          errorMsg = `Email Address Doesn't Exict`
          break;
        case 'INVALID_PASSWORD':
          errorMsg = 'Wrong Password'
          break;  
      }
      return throwError(errorMsg);
  }  
}
