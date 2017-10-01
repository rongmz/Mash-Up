import { Component, OnInit } from '@angular/core';
import { ActiveViewService } from '../../services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private activeViewService:ActiveViewService) { }

  ngOnInit() {
    this.activeViewService.setActiveView('User Settings');
  }

}
