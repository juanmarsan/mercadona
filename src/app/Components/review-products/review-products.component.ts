import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-review-products',
  templateUrl: './review-products.component.html',
  styleUrls: ['./review-products.component.scss']
})
export class ReviewProductsComponent implements OnInit {

  productsToReview: any;

  constructor(private produtsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsReview();
  }


  getProductsReview(){ 
    this.produtsService.getProductsToReview()
    .subscribe((element: any)=> {  
      this.productsToReview = element;
    });
}
}
