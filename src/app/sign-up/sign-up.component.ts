import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
@ViewChild('f') signupForm: NgForm | undefined; 
  constructor(private sign: SignupService, private route: Router) {}

  ngOnInit(): void {
    this.sign.getUsers().subscribe((result)=>{
      // console.log(result);
    
    })
  }
  submitData(data: NgForm){
    
    this.sign.newUser(data.value).subscribe((result)=>{
      alert('login success')
      // console.log(result)
    })
    this.signupForm?.reset();
    this.route.navigate(['home']);
  }
}
