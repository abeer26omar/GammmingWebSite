import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
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
    // const password = form.value.password;
  
    this.loadding = true;
    this.auth.forgetPassword("PASSWORD_RESET",email).subscribe(result =>{
      console.log(result)
      
    }, errorMsg =>{
      this.error = errorMsg;
      // console.log(this.error);
      //   this.loadding = false;
     }
    // this.auth.signIn(email).subscribe(resData=>{
    //   // console.log(resData);
    //   this.loadding = false;
    //   this.route.navigate(['home']);
    // }, errorMsg =>{
    //   // console.log(error);
    //   this.error = errorMsg;
    //   this.loadding = false;
    // }
    );
    form.reset();
    }
 

}
