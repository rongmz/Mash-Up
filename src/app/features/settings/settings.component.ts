import { Component, OnInit } from '@angular/core';
import { ActiveViewService } from '../../services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private activeViewService:ActiveViewService) { }

  ngOnInit() {
    this.activeViewService.setActiveView('Settings');
  }

}
