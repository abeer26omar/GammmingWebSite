import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
loadding = false;
  constructor(private reviewService: ReviewsService) { }

  ngOnInit(): void {
  }
submit(form: NgForm){
  // console.log(form)
  if(!form.valid){
    return;
  }
    const name = form.value.name;
    const email = form.value.email;
    const phone = form.value.phone;
    const address = form.value.address;
    const review = form.value.review;
    this.loadding = true;

    this.reviewService.sendReview(name, email, phone, address, review).subscribe(resReview => {
    })
    form.reset()

}
}
