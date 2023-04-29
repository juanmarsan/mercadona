import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ]
})
export class MaterialModule {}
