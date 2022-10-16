import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
 // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};
export interface DialogData {
 
}

@Component({
  selector: 'adminform-dialog',
  templateUrl: './adminform-dialog.component.html',
  styleUrls: ['./adminform-dialog.component.scss']
})
export class AdminformDialogComponent implements OnInit {
   uploader:any;
   image:any;

   
  constructor(public dialogRef: MatDialogRef< AdminformDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
   onUploadSuccess(event): void {
        console.log("enetered");
      

       
    }
}  
