import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User, DriveFolder } from "../models";
import { ProgressService, ProgressConfig, ActiveViewService } from "../services";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnDestroy, OnInit {

  appVersion: string = '0.0';
  currentFolderName: string = 'Drive';
  user: User = new User('rounak', '', 'Rounak');
  progressConfig: ProgressConfig;
  activeViewSubscription: Subscription;
  folderStack: Array<DriveFolder> = [
    new DriveFolder('A', 'kjlka'), new DriveFolder('B', 'kjlka'), new DriveFolder('C', 'kjlka'),
    new DriveFolder('AB', 'kjlka'), new DriveFolder('BC', 'kjlka'), new DriveFolder('CD', 'kjlka'),
    new DriveFolder('AC', 'kjlka'), new DriveFolder('BD', 'kjlka'), new DriveFolder('CE', 'kjlka'),
    new DriveFolder('AD', 'kjlka'), new DriveFolder('BE', 'kjlka'), new DriveFolder('CF', 'kjlka'),
  ];

  
  constructor(public progressService: ProgressService, public activeViewService: ActiveViewService) {
    this.progressConfig = progressService.getConfig();
    progressService.show(false);
  }

  /**
   * Called after initialization.
   */
  ngOnInit() {
    // subscribe to view name change
    this.activeViewSubscription = this.activeViewService.activeView$.subscribe(
      viewName => {
        this.currentFolderName = viewName;
      }
    );


  }

  /**
   * method called on destroy
   */
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.activeViewSubscription.unsubscribe();
  }


  /**
   * Do logout functionality
   */
  doLogout() {

    // do logout
    //this.progressService.show(true);

  }

}
