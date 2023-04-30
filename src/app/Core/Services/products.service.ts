import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as datos from 'src/app/shared/data/datos.json'
import { iProductos } from '../Models/Interfaces/iProductos';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  arrayProducts: any = (datos as any).products;
  private prod = new BehaviorSubject((datos as any).products);
  products = this.prod.asObservable();

  constructor() { }

  getProducts(): Observable<iProductos[]> {
    return  this.products;
  }


  addProduct(item: iProductos) {
    item.id = (this.arrayProducts[this.arrayProducts.length -1].id) +1;  
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
