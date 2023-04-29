import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as datos from 'src/app/shared/data/datos.json'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any = (datos as any).products;
  constructor() { }


  getProductsToReview(): Observable<any[]> {
    return  of([{name: 'Tornillos', units: 100}]);
  }
  getProducts(): Observable<any[]> {
    return  of(this.products);
  }

  addProduct(data: any){
    data.id = (this.products[this.products.length -1].id) +1;
    this.products.push(data);
  }

  deleteProduct(id: number){
    this.products.splice(this.products.findIndex((v: { id: number; }) => v.id === id), 1);
  }

  // products = [
  //   {
  //     "nombre": "Arroz",
  //     "precio": 12.99,
  //     "formato": "Plato",
  //     "marca": "Cocina"
  //   },
  //   {
  //     "nombre": "Ensalada César",
  //     "precio": 8.50,
  //     "formato": "Porción individual",
  //     "marca": "Grst"
  //   },
  //   {
  //     "nombre": "Pizza Margarita",
  //     "precio": 15.99,
  //     "formato": "Pizza grande",
  //     "marca": "Pizza Hut"
  //   },
  //   {
  //     "nombre": "Hamburguesa",
  //     "precio": 9.99,
  //     "formato": "Comida rápida",
  //     "marca": "McDonald's"
  //   },
  //   {
  //     "nombre": "Sopa",
  //     "precio": 5.99,
  //     "formato": "Porción individual",
  //     "marca": "SoCo"
  //   },
  //   {
  //     "nombre": "Pastel de carne",
  //     "precio": 14.99,
  //     "formato": "Plato",
  //     "marca": "Rantes"
  //   },
  //   {
  //     "nombre": "Pollo frito",
  //     "precio": 10.99,
  //     "formato": "Comida rápida",
  //     "marca": "KFC"
  //   },
  //   {
  //     "nombre": "Sushi de salmón",
  //     "precio": 22.50,
  //     "formato": "Porción individual",
  //     "marca": "Sushi Toc"
  //   },
  //   {
  //     "nombre": "Taco de carne asada",
  //     "precio": 3.99,
  //     "formato": "Llevar",
  //     "marca": "El Taco"
  //   },
  //   {
  //     "nombre": "Macarrones",
  //     "precio": 16.99,
  //     "formato": "Plato",
  //     "marca": "CoRapid"
  //   },
  //   {
  //     "nombre": "Chorizo",
  //     "precio": 26.99,
  //     "formato": "Plato",
  //     "marca": "Emplatados sa"
  //   },
  //   {
  //     "nombre": "Spaghetti carbonara",
  //     "precio": 12.50,
  //     "formato": "Plato",
  //     "marca": "CoRapid"
  //   },
  //   {
  //     "nombre": "Fajitas",
  //     "precio": 18.99,
  //     "formato": "Plato",
  //     "marca": "CoRapid"
  //   },
  //   {
  //     "nombre": "Sándwich",
  //     "precio": 7.99,
  //     "formato": "Comida rápida",
  //     "marca": "CoRapid"
  //   },
  //   {
  //     "nombre": "Salmón a la parrilla",
  //     "precio": 19.99,
  //     "formato": "Plato",
  //     "marca": "CoRapid"
  //   },
  //   {
  //     "nombre": "Entrecot",
  //     "precio": 11.99,
  //     "formato": "Plato",
  //     "marca": "CoRapid"
  //   },
  //   {
  //     "nombre": "Empanadas de carne",
  //     "precio": 2.50,
  //     "formato": "Comida rápida",
  //     "marca": "CoRapid"
  //   }
  // ]
  
}
