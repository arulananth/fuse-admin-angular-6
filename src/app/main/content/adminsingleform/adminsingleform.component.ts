import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminsingleDialogComponent } from './adminsingle-dialog/adminsingle-dialog.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';



@Component({
    selector   : 'adminsingleform-card',
    templateUrl: './adminsingleform.component.html',
    styleUrls  : ['./adminsingleform.component.scss']
})
export class AdminsingleformComponent
{
   addedForm: FormGroup;
    submitted = false;
       btnchange = false;
       successmsgs =false;
      constructor(public dialog: MatDialog, public router:Router,private formBuilder: FormBuilder)
    
    {
     
    }   

        ngOnInit() {
          this.addedForm = this.formBuilder.group({
            addfield: ['', Validators.required]
            });
        }

  
     openDelet(): void {
        this.dialog.open(AdminsingleDialogComponent , {
          height: 'auto',
          width: '600px',
           data:{
           }
           
         });
    
      };


        btnClick():void{
        this.router.navigateByUrl('/adminsingleedit');
       };

         btnClickhome():void {
        this.router.navigateByUrl('/user');
        };

  
       
         btnChange():void{
           this.successmsgs =false;
           this.btnchange = true;
           

        }


        get f() { return this.addedForm.controls; }
 
        onSubmit() {
            this.submitted = true;
            if (this.addedForm.valid) {
                this.submitted = false;
                this.addedForm.reset();
                this.successmsgs =true;
            }
            
        }

        reset() {
          this.addedForm.reset();
          this.submitted = false;
        }
   
}
