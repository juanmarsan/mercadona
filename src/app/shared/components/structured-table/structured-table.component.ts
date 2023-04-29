import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-structured-table',
  templateUrl: './structured-table.component.html',
  styleUrls: ['./structured-table.component.scss']
})
export class StructuredTableComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private dialogRef: MatDialogRef<any> ) { }

  ngOnInit(): void {
    console.log("cols", this.data)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }


  apply(){
    this.dialogRef.close(true);
  }
  
  close() {
      this.dialogRef.close(false);
  }

  

}
