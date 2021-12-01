import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
@ViewChild('f') signinFrom: NgForm | undefined;

loadding = false;
error: string = '';
  constructor(private auth: AuthService,private route: Router) { }

  ngOnInit(): void {
  }
  submitData(form: NgForm){
   // console.log(data)
   if(!form.valid){
    return;
  }
  // const name = form.value.name;
  const email = form.value.email;
  const password = form.value.password;

  this.loadding = true;
  this.auth.signIn(email,password).subscribe(resData=>{
    // console.log(resData);
    this.loadding = false;
    this.route.navigate(['home']);
  }, errorMsg =>{
    // console.log(error);
    this.error = errorMsg;
    this.loadding = false;
  }
  );
  form.reset();
  }
}
