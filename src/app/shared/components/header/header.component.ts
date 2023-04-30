import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from 'src/app/Core/Services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private authService: AuthService) { }

    accede:boolean = false;

  ngOnInit(): void {
    console.log("START");
    
    this.accede = this.authService.isLoged();
  }
  
  sessionStop(){
    this.authService.logout();
    this.accede = false;
  }

  sessionStart() {
    let user = {userName: 'Mercadona', password: '1234'}
    this.authService.login(user);
    if (this.authService.isLoggedIn) {
      this.accede = true;
    }
  }

  
}

