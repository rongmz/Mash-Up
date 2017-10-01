import { Component, OnInit } from '@angular/core';
import { ActiveViewService } from '../../services';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent implements OnInit {

  constructor(private activeViewService:ActiveViewService) { }

  ngOnInit() {
    this.activeViewService.setActiveView('User Settings');
  }

}
