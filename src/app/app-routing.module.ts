import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewProductsComponent } from './features/review-products/review-products.component';
import { AuthGuard } from './Core/Services/auth/auth.guard';
import { ShowProductsComponent } from './features/show-products/show-products.component';

const routes: Routes = [
  { path: '', redirectTo: '/review', pathMatch: 'full' },
  { path: 'review', component: ReviewProductsComponent },
  { path: 'products', component: ShowProductsComponent, canActivate: [AuthGuard]  },
  {path: '**', redirectTo: '/review'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
