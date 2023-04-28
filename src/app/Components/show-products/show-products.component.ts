import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  columnas: string[] = ['nombre', 'precio', 'formato', 'marca', 'accion'];
  dataSource: any;

  constructor(private produtsService: ProductsService) { }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  ngOnInit() {
    
    this.produtsService.getProducts().subscribe(element=>{
      this.dataSource = new MatTableDataSource<any>(element);
      console.log(element)
    })
    this.dataSource.paginator = this.paginator;
  }

}
