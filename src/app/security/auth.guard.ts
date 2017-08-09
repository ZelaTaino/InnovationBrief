import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private authService:AuthService, private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.getAuthState().map(auth => this.authService.isAdmin(auth.uid))
      .take(1)
      .do(allowed => {
        if(!allowed) {
          this.router.navigate(['/login']);
        }
      });
    }
}


@Injectable()
export class UserGuard implements CanActivate {

    constructor(private authService:AuthService, private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {

      return this.authService.getAuthState().map(auth => {
        if (auth) {
          return true;
        } else {
          return false;
        }
      })
      .take(1)
      .do(allowed => {
        if(!allowed) {
          this.router.navigate(['/login']);
        }
      });
    }
}
