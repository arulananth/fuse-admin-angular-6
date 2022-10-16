import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {FormControl, Validators} from '@angular/forms';
import { AdminsingleDialogComponent } from './adminsingle-dialog/adminsingle-dialog.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';



@Component({
    selector   : 'adminsingleedit-card',
    templateUrl: './adminsingleedit.component.html',
    styleUrls  : ['./adminsingleedit.component.scss']
})
export class AdminsingleeditComponent
{


       

        ngOnInit() {
          
        }

    constructor(public dialog: MatDialog,public router:Router
        
    )
    {
     
    }

    addfield = new FormControl('', [Validators.required]);
openDelet(): void {
        this.dialog.open(AdminsingleDialogComponent , {
          height: 'auto',
          width: '600px',
           data:{
           }
           
         });
    
      };

      btnClickhome():void{
        this.router.navigateByUrl('/home');
       };
   
}
