import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
@ViewChild('f') signupForm: NgForm | undefined; 
user: any = [];
 loadding = false;
 error: string = '';
  constructor(private route: Router, 
    private auth: AuthService,
    private users: UsersService) {}

  ngOnInit(): void {
    // this.users.getUsers()
    // .subscribe(allUsers => {
    //   console.log(allUsers)
    //   this.user = allUsers
    //   // console.log(this.user)
    // });   
  }
  submitData(form: NgForm){
     // console.log(data)
     if(!form.valid){
      return;
    }
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const describtion = form.value.describtion;
    this.loadding = true;

    this.auth.signUp(name,email,password).subscribe(resData=>{
      // console.log(resData.name);
      this.loadding = false;
      this.route.navigate(['home']);
    }, errorMsg =>{
      // console.log(error);
      this.error = errorMsg;
      this.loadding = false;
    }
    );
    this.users.saveUsers(name, email, password,describtion).subscribe(userDateRes =>{
      // console.log(userDateRes)
    })
    // if(form){
    //   form.reset();
    // }
  }
}