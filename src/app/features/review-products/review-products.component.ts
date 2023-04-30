import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Core/Services/products.service';

@Component({
  selector: 'app-review-products',
  templateUrl: './review-products.component.html',
  styleUrls: ['./review-products.component.scss']
})
export class ReviewProductsComponent implements OnInit {

  productsToReview: any;

  constructor(private produtsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getProductsReview();
  }


  getProductsReview(){ 
    this.produtsService.getProductsToReview()
    .subscribe((element: any)=> {
      this.productsToReview = element;
    });
  }
   
  showProducts(){
    console.log("PASA");
    
    this.router.navigate(['/products']);
  }
}
