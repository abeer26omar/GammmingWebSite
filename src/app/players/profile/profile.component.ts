import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User, usersArray } from 'src/app/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userId :string = '';
  userDetails: usersArray = {
    name:'',
    email:'',
    password: '',
    aboutUser: ''
  };
  constructor(private route: ActivatedRoute,private user: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['id'];

    this.user.getOneUser(this.userId).subscribe(result =>{
      console.log(result);
    })
  });
 }
}

