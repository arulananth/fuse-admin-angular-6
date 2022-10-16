import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataSource } from '@angular/cdk/table';


import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import {PopoverModule} from "ngx-popover";
export interface DialogData {
 
}

@Component({
  selector: 'adminform-dialog3',
  templateUrl: './adminform-dialog3.component.html',
  styleUrls: ['./adminform-dialog3.component.scss']
})
export class AdminformDialog3Component implements OnInit {
        addedForm: FormGroup;
       submitted = false;
       displayedColumns: string[] = [
              
              'data1', 
              'data2', 
              
              
            
            ];
         dataSource = new MyDataSource(DATA);
         isExtendedRow = (index, item) => item.extend;
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialog3Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.addedForm = this.formBuilder.group({
            field: ['', [Validators.required]],
            field1: ['', [Validators.required]],
            field2: ['', [Validators.required]]
            
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


const DATA = [
  { data1: 'Loreum  Ipsum', data2: 'profile' ,  extend: true },
  { data1: 'Loreum  Ipsum', data2: 'profile' },
  { data1: 'Loreum  Ipsum', data2: 'profile'},
  { data1: 'Loreum  Ipsum', data2: 'profile'  , extend: true },
  { data1: 'Loreum  Ipsum', data2: 'profile'},
]

class MyDataSource implements DataSource<any> {

  data = new BehaviorSubject<any>([]);

  constructor(initial: any[]) {
    this.data.next(initial);
  }

  /** Simple stream */
  connect() {
    return this.data;
  }

  /** Noop */
  disconnect() { }
}