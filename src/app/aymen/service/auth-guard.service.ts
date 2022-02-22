import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import {HomeService} from "./home.service";
import {AuthServiceService} from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private authservice:AuthServiceService,
              private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state : RouterStateSnapshot
    // @ts-ignore
    // @ts-ignore
  ): Observable<boolean> | Promise<boolean>| boolean{
    if(this.authservice.IsAuth){
      return true;
    }else {
      this.router.navigate(['/']);
    }
  }
}
