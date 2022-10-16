import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {PopoverModule} from "ngx-popover";
export interface DialogData {
 
}

export interface Transaction {
  th1: number;
  th2: number;
  th3: number;
  th4: number;
  th5:string;
  th6: string;
  
  
}


  const transactions: Transaction[] = [
    {th1: 2, th2: 2, th3: 2, th4: 2, th5: '', th6: ''},
    {th1: 2, th2: 2, th3: 2, th4: 2, th5: '', th6: ''},
    {th1: 2, th2: 2, th3: 2, th4: 2, th5: '', th6: ''},
    {th1: 2, th2: 2, th3: 2, th4: 2, th5: '', th6: ''},
    {th1: 2, th2: 2, th3: 2, th4: 2, th5: '', th6: ''},
    {th1: 2, th2: 2, th3: 2, th4: 2, th5: '', th6: ''},

  ];
@Component({
  selector: 'adminform-dialog',
  templateUrl: './adminform-dialog.component.html',
  styleUrls: ['./adminform-dialog.component.scss']
})
export class AdminformDialogComponent implements OnInit {
  addedForm: FormGroup;
submitted = false;

displayedColumns: string[] = ['th1', 'th2','th3','th4','th5','th6'];
    dataSource = new MatTableDataSource<Transaction>(transactions);
  
        
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
   
    this.addedForm = this.formBuilder.group({
            field: ['', [Validators.required]],
            field1: ['', [Validators.required]],
            field2: ['', [Validators.required]],
            field3: ['', [Validators.required]],
            field4: ['', [Validators.required]],
            field5: ['', [Validators.required]],
            field6: ['', [Validators.required]],
            field7: ['', [Validators.required]],
            field8: ['', [Validators.required]],
            
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
