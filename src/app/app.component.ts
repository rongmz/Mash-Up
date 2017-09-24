import { Component } from '@angular/core';

import { ProgressService, ProgressConfig } from './services/progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  progressConfig: ProgressConfig;
  /**
   * The background theme taken from localstorage
   */
  backgroundTheme: string;

  constructor(public progress: ProgressService) {
    // get background theme
    this.backgroundTheme = window.localStorage['backgroundTheme'] || 'diagonal-lines';
    this.progressConfig = progress.getConfig();
  }

}
