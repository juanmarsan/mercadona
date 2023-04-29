import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewProductsComponent } from './features/review-products/review-products.component';
import { MaterialModule } from './Core/Modules/material.module';
import { ShowProductsComponent } from './features/show-products/show-products.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AddProductsComponent } from './features/add-products/add-products.component';
import { StructuredTableComponent } from './shared/components/structured-table/structured-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Core/Services/auth/auth.service';
import { AuthGuard } from './Core/Services/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ReviewProductsComponent,
    ShowProductsComponent,
    HomeComponent,
    AddProductsComponent,
    StructuredTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
