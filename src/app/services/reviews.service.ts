import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }
  sendReview(name: string, email: string,phone: string,address: string, review:string){
    return this.http.post('https://gamming-website-default-rtdb.firebaseio.com/reviews.json',{
      name: name,
      email: email,
      phone: phone,
      address: address,
      review: review
    })
  }
}
