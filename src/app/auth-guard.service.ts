import { Injectable } from '@angular/core';
//
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';//, CanActivate,CanActivateChild
import { Observable } from 'rxjs';
//
@Injectable({
	providedIn: 'root'
})
export class AuthGuardService {
	loggedIn = false;

	constructor(private router: Router) { }

	isAuthonticated(){
		try{
			//setTimeout(() => {
				let token = localStorage.getItem('token');
				if(token){
					console.log("Token found !");
					return true;
				}else{
					console.log("Token not found!");
					return false;
				}
			//}, 0);
		}catch(e){
			console.log("isAuthonticated", e);
			return false;
		}
	}

	loggedInUser(){
		console.log("hi");
		this.loggedIn = true;
	}
	loggedOutUser(){
		this.loggedIn = false;
	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean { 
		let is_authencated = this.isAuthonticated();
		if(is_authencated){
			return is_authencated;
		}else{
			console.log("navigate to login");
			this.router.navigate(['/login']);
			
			return is_authencated;
		}
	}
  
	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean{
		return this.canActivate(route, state);
	}
}
