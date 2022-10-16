import { Component, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';
@Component({
    selector   : 'adminfull-card',
    templateUrl: './adminfull.component.html',
    styleUrls  : ['./adminfull.component.scss']
})
export class AdminfullComponent
{

  addedForm: FormGroup;
submitted = false;
successmsgs = false; 

      constructor(public dialog: MatDialog, public router: Router,private formBuilder: FormBuilder){}
      
      openDelet(): void {
        this.dialog.open(AdminformDialogComponent , {
          height: 'auto',
          width: '600px',
           data:{
           }
         });
      };

ngOnInit() {
      this.addedForm = this.formBuilder.group({
            addfield: ['', Validators.required],
            addfield1: ['', Validators.required],
            addfield2: ['', Validators.required],
            addfield3: ['', Validators.required],
            addfield4: ['', Validators.required],
            addfield5: ['', Validators.required],
            addfield6: ['', Validators.required],
             selectControl: ['', Validators.required],
             selectControl1: ['', Validators.required],
             selectControl2: ['', Validators.required],
             selectControl3: ['', Validators.required],
             selectControl4: ['', Validators.required],
             selectControl5: ['', Validators.required],
            });
}
       btnClickhome():void{
        this.router.navigateByUrl('/home');
       };
      get f() { return this.addedForm.controls; }
 
        onSubmit() {
            this.submitted = true; 
            
            if (this.addedForm.valid) {
                this.submitted = false;
                this.addedForm.reset();
                this.successmsgs =true;
            }
           
        }

   
}
