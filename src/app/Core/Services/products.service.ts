import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as datos from 'src/app/shared/data/datos.json'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  arrayProducts: any = (datos as any).products;
  private prod = new BehaviorSubject((datos as any).products);
  products = this.prod.asObservable();

  //private todos: any[] = [];
  private nextId = 0;
  constructor() { }


  getProductsToReview(): Observable<any[]> {
    return  of([{name: 'Tornillos', units: 100}]);
  }
  getProducts(): Observable<any[]> {
    return  this.products;
  }


  addProduct(item: any) {
    item.id = (this.arrayProducts[this.arrayProducts.length -1].id) +1;
    console.log(item, ++this.nextId);
    
    this.arrayProducts.push(item);
    this.prod.next(Object.assign([], this.arrayProducts));
  }
 
  deleteProduct(id: number) {
    this.arrayProducts.forEach((t: { id: number; }, i: any) => {
      if (t.id === id) {
        this.arrayProducts.splice(i, 1);
      }
      this.prod.next(Object.assign([], this.arrayProducts));
    });
  }
  
}
