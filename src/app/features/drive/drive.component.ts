import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActiveViewService } from '../../services';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit, OnDestroy {
  
  constructor(private activeViewService:ActiveViewService) { }

  ngOnInit() {
    this.activeViewService.setActiveView('Google Drive');
  }

  ngOnDestroy(): void {
    console.log('destroyed !!');
  }

}
