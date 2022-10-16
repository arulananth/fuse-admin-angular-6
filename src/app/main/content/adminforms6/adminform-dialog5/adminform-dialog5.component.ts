import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PopoverModule} from "ngx-popover";
export interface DialogData {
 
}
export interface Transaction {
  th1: string;
  th2: string;
  
  
}


  const transactions: Transaction[] = [
    {th1: 'Loreum Ipsum', th2: 'Loreum Ipsum'},
    {th1: 'Loreum Ipsum', th2: 'Loreum Ipsum'},
    {th1: 'Loreum Ipsum', th2: 'Loreum Ipsum'},
    {th1: 'Loreum Ipsum', th2: 'Loreum Ipsum'},
    {th1: 'Loreum Ipsum', th2: 'Loreum Ipsum'},
    {th1: 'Loreum Ipsum', th2: 'Loreum Ipsum'},
    {th1: 'Loreum Ipsum', th2: 'Loreum Ipsum'},
    {th1: 'Loreum Ipsum', th2: 'Loreum Ipsum'},


  ];
@Component({
  selector: 'adminform-dialog5',
  templateUrl: './adminform-dialog5.component.html',
  styleUrls: ['./adminform-dialog5.component.scss']
})
export class AdminformDialog5Component implements OnInit {
  addedForm: FormGroup;
submitted = false;
displayedColumns: string[] = ['th1', 'th2'];
    dataSource = new MatTableDataSource<Transaction>(transactions);
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialog5Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.addedForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
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
