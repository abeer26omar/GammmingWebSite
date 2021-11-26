import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
@ViewChild('f') signinFrom: NgForm | undefined;
  constructor(private signup: SignupService, private route: Router) { }

  ngOnInit(): void {
  }
  submitData(data: NgForm){
    console.log(data)
  //   this.signup.getUsers().subscribe((res) =>{
  //     const user = res((a:any)=>{
  //       return a.email === this.signinFrom?.value.email && a.password === this.signinFrom?.value.password;
  //     });
  //     if(user){
  //       console.log('user logged in')
  //       this.signinFrom?.reset();
  //       this.route.navigate(['home']);
  //     }else{
  //       console.log('user not found');
  //     }
  //   },err=>{
  //     console.log('error');
  //   }
  //   )
  }
}
