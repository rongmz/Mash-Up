import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

/**
 * This canActivate guard checks before loading login page, whether the user is already logged in or not.
 * @author Rounak Saha
 */
@Injectable()
export class LoginRouteGuard implements CanActivate {
  canActivate() {
    console.log('login can activated called');
    return true;
  }
}