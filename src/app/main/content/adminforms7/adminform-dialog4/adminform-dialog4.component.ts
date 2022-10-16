import { Component, OnInit, Inject } from '@angular/core';
import {MatCheckboxModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatTableDataSource} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PopoverModule} from "ngx-popover";
export interface DialogData {
 
}
export interface Transaction {
  th1: number;
  th2: string;
  
 
  
}


  const transactions: Transaction[] = [
    {th1: 2, th2: 'Loreum Ipsum'},
     {th1: 2, th2: 'Loreum Ipsum'},
     {th1: 2, th2: 'Loreum Ipsum'},
     {th1: 2, th2: 'Loreum Ipsum'},
     {th1: 2, th2: 'Loreum Ipsum'},
      {th1: 2, th2: 'Loreum Ipsum'},
       {th1: 2, th2: 'Loreum Ipsum'},
        {th1: 2, th2: 'Loreum Ipsum'},
         {th1: 2, th2: 'Loreum Ipsum'},
          {th1: 2, th2: 'Loreum Ipsum'},

  ];
@Component({
  selector: 'adminform-dialog4',
  templateUrl: './adminform-dialog4.component.html',
  styleUrls: ['./adminform-dialog4.component.scss']
})
export class AdminformDialog4Component implements OnInit {
  addedForm: FormGroup;
submitted = false;
displayedColumns: string[] = ['th1', 'th2'];
    dataSource = new MatTableDataSource<Transaction>(transactions);
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialog4Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.addedForm = this.formBuilder.group({
            field: ['', [Validators.required]],
            field1: ['', [Validators.required]],
            field2: ['', [Validators.required]],
            field3: ['', [Validators.required]]
            });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

   get f() { return this.addedForm.controls; }
 
        onSubmit() {
            this.submitted = true;
            if (this.addedForm.invalid) {
                return;
            }
            
        }

}
