import { Component, OnInit } from '@angular/core';
import { ActiveViewService } from '../../services';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private activeViewService:ActiveViewService) { }

  ngOnInit() {
    this.activeViewService.setActiveView('Welcome');
  }

}
