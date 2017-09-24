import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProgressService } from '../services/progress.service';
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
  
  // login username and credentials
  loginUser:string;
  loginPassword:string;

  constructor(public progressService:ProgressService, public router:Router) {
  }

  ngOnInit() {
   // load users array
    this.users = [new User('u1', undefined, 'User 1'), new User('u2', undefined, 'User 2')];
  }

  /**
   * Called when user clicks on login button
   */
  onSubmit() {
    if(this.loginUser && this.loginPassword) {
      // show progressbar 
      this.progressService.show({show:true, mode:'query'});
      // -->>login here

      // as of now going to another route. after some time
      setTimeout(() => {
        this.progressService.show(false);
        this.router.navigate(['home']);
      }, 1500);

    }
  }

}
