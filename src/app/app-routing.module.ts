import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewProductsComponent } from './Components/review-products/review-products.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'review', component: ReviewProductsComponent },
  { path: 'home', component: HomeComponent },
  {path: '**', redirectTo: '/review'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
