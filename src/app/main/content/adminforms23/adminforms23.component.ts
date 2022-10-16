import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialog1Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialog2Component } from './adminform-dialog2/adminform-dialog2.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Router } from '@angular/router';
 

export interface Transaction {
  th1: number;
  th2: string;
  th3:string;
  th4:string;
  th5: string;
  th6:string;
  th7:string;
  
  
}


  const transactions: Transaction[] = [
    {th1: 2, th2: 'loreumipsum.com', th3: '116555555',th4: 'Login:2356189',th5: '231456:loreum ipsum',th6: '',th7: ''},
    {th1: 2, th2: 'loreumipsum.com', th3: '116555555',th4: 'Login:2356189',th5: '231456:loreum ipsum',th6: '',th7:''},
    {th1: 2, th2: 'loreumipsum.com', th3: '116555555',th4: 'Login:2356189',th5: '231456:loreum ipsum',th6: '',th7: ''},
    {th1: 2, th2: 'loreumipsum.com', th3: '116555555',th4: 'Login:2356189',th5: '231456:loreum ipsum',th6: '',th7: ''},
    {th1: 2, th2: 'loreumipsum.com', th3: '116555555',th4: 'Login:2356189',th5: '231456:loreum ipsum',th6: '',th7: ''},

  ];
@Component({
    selector   : 'adminforms23-card',
    templateUrl: './adminforms23.component.html',
    styleUrls  : ['./adminforms23.component.scss']
})
export class Adminforms23Component
{
@ViewChild(MatPaginator) paginator: MatPaginator;
    imgs:any;
    preview: boolean = false;


    displayedColumns: string[] = ['th1', 'th2','th3','th4','th5', 'th6','th7'];
    dataSource = new MatTableDataSource<Transaction>(transactions);
  
        ngOnInit() {
            this.dataSource.paginator = this.paginator;
        }

    constructor(public dialog: MatDialog,public router:Router ){}
   
       openTop(): void {
        const dialogRef = this.dialog.open(AdminformDialogComponent , {
          height: 'auto',
          width: '800px',
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

      openEdit(): void {
        const dialogRef1 = this.dialog.open(AdminformDialog1Component , {
          height: 'auto',
          width: '800px',
           data:{
           }
           
         });
      };

      openDelete(): void {
        const dialogRef1 = this.dialog.open(AdminformDialog2Component , {
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
