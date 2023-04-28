import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewProductsComponent } from './Components/review-products/review-products.component';

const routes: Routes = [
  { path: '', redirectTo: '/review', pathMatch: 'full' },
  { path: 'review', component: ReviewProductsComponent },
  {path: '**', redirectTo: '/review'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
