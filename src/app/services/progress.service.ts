import { Injectable } from '@angular/core';

/**
 * Progress Config
 * @author Rounak Saha
 */
export interface ProgressConfig {
  show : boolean;
  color ?: string;
  value ?: number;
  bufferValue ?: number;
  mode ?: string;
}

/**
 * Progressbar service
 * @author Rounak Saha
 */
@Injectable()
export class ProgressService {

  private progressConfig: ProgressConfig;

  constructor() {
    this.progressConfig = {
      show: false,
      mode: 'indeterminate'
    };
   }


  /**
   * get config object
   */
  getConfig(): any { return this.progressConfig; }

  /**
   * Sets config for the progressbar
   * @param config angular material progressbar config
   */
  show(config: boolean | ProgressConfig) {
    if (typeof (config) == 'boolean')
      this.progressConfig.show = config;
    else if (config) {
      // set progress without changing instance reference.
      this.progressConfig.show = config.show;
      this.progressConfig.mode = config.mode;
      this.progressConfig.color = config.color;
      this.progressConfig.value = config.value;
      this.progressConfig.bufferValue = config.bufferValue;
    }
  }


}
