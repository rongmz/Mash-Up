import { Component } from '@angular/core';

import { ProgressService, ProgressConfig } from './services/progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  progressConfig: ProgressConfig;

  constructor(public progress: ProgressService) {
    this.progressConfig = progress.getConfig();
  }

}
