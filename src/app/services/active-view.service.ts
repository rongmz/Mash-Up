import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * This service is used to seemlessly communicate between children components and parent components 
 * related to current view, even through router-outlet.
 * @author Rounak Saha
 */
@Injectable()
export class ActiveViewService {

  /**
   * This is the active view stream source that will be used to emit view change events.
   */
  private activeViewSource = new Subject<string>();

  /**
   * Active view observable stream.
   */
  activeView$ = this.activeViewSource.asObservable();

  /**
   * Method to pass the current activated view name to the observer stream.
   * @param viewName the current view name
   */
  setActiveView(viewName:string) {
    this.activeViewSource.next(viewName);
  }
  

}
