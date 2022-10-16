import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';
@Component({
    selector   : 'adminform-card',
    templateUrl: './adminform.component.html',
    styleUrls  : ['./adminform.component.scss']
})
export class AdminformComponent
{
  addedForm: FormGroup;
submitted = false;
     constructor(private formBuilder: FormBuilder,private translation: TranslationService,public dialog: MatDialog,public router:Router )
      {
          this.translation.loadTranslation();
      }

      ngOnInit() 
      {
           this.addedForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
            });
      }
      openDelet(): void {
        this.dialog.open(AdminformDialogComponent , {
          height: 'auto',
          width: '600px',
           data:{
           }
         });
      };

      btnClickhome():void{
        this.router.navigateByUrl('/home');
       };

      get f() { return this.addedForm.controls; }
 
        onSubmit() {
            this.submitted = true;
            if (this.addedForm.valid) {
                this.dialog.open(AdminformDialogComponent , {
                height: 'auto',
                width: '600px',
                 data:{
                 }
               });
            }
            else{
              
            }
            
        }
   
}
