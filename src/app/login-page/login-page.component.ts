import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  /**
   * The users array
   */
  users: User[];

  isLoading: boolean = false;
  
  constructor(public router:Router) {
  }

  ngOnInit() {
   // load users array
    this.users = [
      new User('username1', undefined, 'Rounak'), 
      new User('username2', undefined, 'Soma'),
      new User('username3', undefined, 'Admin'),
      new User('username4', undefined, 'User 4'),
      new User('username5', undefined, 'Ron'),
    ];
  }


  /**
   * Called when user clicks on login button
   * @param user the user to login with.
   */
  doLogin(user:User) {
    if(user.username && user.credential) {
      // show progressbar 
      this.isLoading = true;
      // -->>login here

      // as of now going to another route. after some time
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['home']);
      }, 1500);

    }
  }

}
