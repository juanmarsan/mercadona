import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { StructuredTableComponent } from 'src/app/shared/components/structured-table/structured-table.component';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  columnas: any = ['nombre', 'precio', 'formato', 'marca', 'accion'];
  
  dataSource: any;

  constructor(private produtsService: ProductsService, private dialog: MatDialog) { }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    
    this.produtsService.getProducts().subscribe(element=>{
      this.dataSource = new MatTableDataSource<any>(element);
      console.log(element)
    })
    this.dataSource.paginator = this.paginator;
  }

  

  delete(id:number){
    this.produtsService.deleteProduct(id);
  }

  configurar() {
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = this.columnas

      this.dialog.open(StructuredTableComponent,  dialogConfig)
      .afterClosed().subscribe(element => {
        console.log(element);
        
      })


      
  }

}
