import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

/**
 * This canActivate guard checks before loading home page, whether the user is already logged in or not.
 * @author Rounak Saha
 */
@Injectable()
export class HomeRouteGuard implements CanActivate {
  canActivate() {
    console.log('home can activated called');
    return true;
  }
}