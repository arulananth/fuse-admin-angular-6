import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';

export interface DialogData {
 
}

@Component({
  selector: 'adminform-dialog',
  templateUrl: './adminform-dialog.component.html',
  styleUrls: ['./adminform-dialog.component.scss']
})
export class AdminformDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< AdminformDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
