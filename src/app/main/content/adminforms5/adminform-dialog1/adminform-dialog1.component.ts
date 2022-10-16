import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PopoverModule} from "ngx-popover";
export interface DialogData {
 
}

@Component({
  selector: 'adminform-dialog1',
  templateUrl: './adminform-dialog1.component.html',
  styleUrls: ['./adminform-dialog1.component.scss']
})
export class AdminformDialog1Component implements OnInit {
  addedForm: FormGroup;
submitted = false;
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialog1Component>,
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
            field9: ['', [Validators.required]],
            field10: ['', [Validators.required]],
            field11: ['', [Validators.required]],
            field12: ['', [Validators.required]],
            field13: ['', [Validators.required]],
            field14: ['', [Validators.required]],
            field15: ['', [Validators.required]]
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
