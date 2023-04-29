import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductsComponent } from '../../../features/add-products/add-products.component';
import { AuthService } from 'src/app/Core/Services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private authService: AuthService) { }

    accede:boolean = false;

  ngOnInit(): void {
    this.accede = false;
  }
  
  sessionStop(){
    this.authService.logout();
    this.accede = false;
  }

  sessionStart() {
    this.authService.login("Mercadona");
    this.accede = true;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddProductsComponent, dialogConfig)
    .afterClosed().subscribe(element => {
      console.log(element);
      
    });
  }
}

