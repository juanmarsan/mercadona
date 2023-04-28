import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule {}
