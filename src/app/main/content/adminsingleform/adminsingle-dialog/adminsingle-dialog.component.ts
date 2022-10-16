import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';

export interface DialogData {
 
}

@Component({
  selector: 'adminsingle-dialog',
  templateUrl: './adminsingle-dialog.component.html',
  styleUrls: ['./adminsingle-dialog.component.scss']
})
export class AdminsingleDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< AdminsingleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
