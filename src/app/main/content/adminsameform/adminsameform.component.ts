import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector   : 'adminsameform-card',
    templateUrl: './adminsameform.component.html',
    styleUrls  : ['./adminsameform.component.scss']
})
export class AdminsameformComponent
{

addedForm: FormGroup;
submitted = false;
successmsgs = false;     
    constructor(
        public router:Router,private formBuilder: FormBuilder
    )
    {
     
    }
        ngOnInit() {
          this.addedForm = this.formBuilder.group({
            addfield: ['', Validators.required],
            addfield1: ['', Validators.required],
            addfield2: ['', Validators.required],
            addfield3: ['', Validators.required]
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
