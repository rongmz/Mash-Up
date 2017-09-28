import { Component, OnInit } from '@angular/core'; 

import { User } from '../models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    // put user details
    this.user = new User('username', '', 'Admin');
    
  }

}
