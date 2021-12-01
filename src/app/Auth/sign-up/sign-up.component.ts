import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
@ViewChild('f') signupForm: NgForm | undefined; 

 loadding = false;
 error: string = '';
  constructor(private route: Router, private auth: AuthService) {}

  ngOnInit(): void {   
  }
  submitData(form: NgForm){
     // console.log(data)
     if(!form.valid){
      return;
    }
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    this.loadding = true;

    this.auth.signUp(name,email,password).subscribe(resData=>{
      console.log(resData.name);
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