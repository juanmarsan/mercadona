import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/Core/Services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  valor: number = 0.1;
  valorSumar: number = 0.1;

  form = this.fb.group({
    name: ['', Validators.required ],
    marca: ['', Validators.required],
    formato: ['', Validators.required],
    precio: [0.1],
  });


  constructor(private productsService: ProductsService,
    private dialogRef: MatDialogRef<any>,private fb: FormBuilder) { }

  formatos: any[] = [
    {value: 'plato', viewValue: 'Plato'},
    {value: 'bebida', viewValue: 'Bebida'},
    {value: 'envasado', viewValue: 'Envasado'},
  ];



  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log("submit", this.form.value);
    
    let element =
      {
        "id": -1,
        "nombre": this.form.value.name,
        "precio": this.form.value.precio,
        "formato": this.form.value.formato,
        "marca": this.form.value.marca,
      }
    this.productsService.addProduct(element);
    this.dialogRef.close(true);
 }
  

  sumar(){
    console.log("form", this.form);
    
    this.valor = this.valor + this.valorSumar;
    this.form.value.precio = this.form.value.precio + this.valorSumar;
  }

  restar(){
   this.valor > this.valorSumar ? this.valor = this.valor - this.valorSumar : this.valor = 0;
  }

  carga(){
    console.log("jbjkhjhbjhbvjhbjh");
    
    this.form.value.precio = this.valor;
  }
  
  close() {
      this.dialogRef.close(false);
  }

}
