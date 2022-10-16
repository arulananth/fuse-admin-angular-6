import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Router } from '@angular/router';
 import { DropzoneModule } from 'ngx-dropzone-wrapper';  
 import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';  
 const DROPZONE_CONFIG: DropzoneConfigInterface = {  
  // Change this to your upload POST address:  
  url: 'https://httpbin.org/post',  
  maxFilesize: 50,  
  acceptedFiles: 'image/*'  
 }; 

export interface Transaction {
  item: string;
  cost: number;
  cost1:number;
  action: string;
}
@Component({
    selector   : 'adminupload-card',
    templateUrl: './adminupload.component.html',
    styleUrls  : ['./adminupload.component.scss']
})
export class AdminuploadComponent
{

    imgs:any;
    preview: boolean = false;
    
        ngOnInit() {
           
        }

    constructor(public dialog: MatDialog,public router:Router ){}
   
       openDelet(): void {
        const dialogRef = this.dialog.open(AdminformDialogComponent , {
          height: 'auto',
          width: '600px',
           data:{
           }
           
         });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.imgs="profile";
          this.preview=true;
          console.log(this.imgs);
        });
    
      };




       btnClickhome():void{
        this.router.navigateByUrl('/home');
       };


         displayedColumns: string[] = ['item', 'cost','cost1','action'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4, cost1: 4, action:''},
    {item: 'Towel', cost: 5, cost1: 44, action:''},
    {item: 'Frisbee', cost: 2, cost1: 44, action:''},
    {item: 'Sunscreen', cost: 4, cost1: 44, action:''},
    {item: 'Cooler', cost: 25, cost1: 44, action:''},
    {item: 'Swim suit', cost: 15, cost1: 44, action:''},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

}
