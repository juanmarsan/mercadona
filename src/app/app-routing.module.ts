import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewProductsComponent } from './features/review-products/review-products.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthGuard } from './Core/Services/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'review', component: ReviewProductsComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  {path: '**', redirectTo: '/review'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
