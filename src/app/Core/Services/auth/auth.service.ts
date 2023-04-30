import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router, 
  ) {}


  login(user: any): boolean {
    if (user.userName !== '' && user.password !== '' ) {     
      this.loggedIn.next(true);
      this.router.navigate(['/review']);
      console.log("entr");
      
    }
    return false
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/review']);
  }

  isLoged(): boolean{
    let loged: boolean = false;
    //return this.isLoggedIn;
    this.isLoggedIn.subscribe((e: any)=>{
      loged = e;
    });
    return loged;
  }
}
