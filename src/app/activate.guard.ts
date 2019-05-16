import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router, CanActivateChild, UrlTree, CanActivate } from '@angular/router';
 // import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';

@Injectable()
export class ActivateGuard implements CanActivate {
  
  constructor(private userService:UserService, private router:Router){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
         if(this.userService.isAdminRight()){
           return true
         }else{
           alert("Yo dont have permission to view,Redirecting To Home")
           this.router.navigate(['Home']);
         }
    }
  
  
}
