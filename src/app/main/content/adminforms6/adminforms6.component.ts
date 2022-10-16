import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialog1Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialog2Component } from './adminform-dialog2/adminform-dialog2.component';
import { AdminformDialog3Component } from './adminform-dialog3/adminform-dialog3.component';
import { AdminformDialog4Component } from './adminform-dialog4/adminform-dialog4.component';
import { AdminformDialog5Component } from './adminform-dialog5/adminform-dialog5.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Router } from '@angular/router';
 

export interface Transaction {
  th1: number;
  th2: string;
  th3:string;
  th4:string;
  th5: string;
  th6:string;
  
 
  
}


  const transactions: Transaction[] = [
    {th1: 2, th2: 'Loreum Ipsum', th3: '22235462123666666',th4: 'Loreum Ipsum', th5: 'Loreum Ipsum', th6: ''},
    {th1: 12, th2: 'Loreum Ipsum', th3: '22235462123666666',th4: 'Loreum Ipsum', th5: 'Loreum Ipsum', th6: ''},
    {th1: 4, th2: 'Loreum Ipsum', th3: '22235462123666666',th4: 'Loreum Ipsum', th5: 'Loreum Ipsum', th6: ''},
	{th1: 14, th2: 'Loreum Ipsum', th3: '22235462123666666',th4: 'Loreum Ipsum', th5: 'Loreum Ipsum', th6: ''},
	{th1: 24, th2: 'Loreum Ipsum', th3: '22235462123666666',th4: 'Loreum Ipsum', th5: 'Loreum Ipsum', th6: ''},
    {th1: 44, th2: 'Loreum Ipsum', th3: '22235462123666666',th4: 'Loreum Ipsum', th5: 'Loreum Ipsum', th6: ''},
    {th1: 24, th2: 'Loreum Ipsum', th3: '22235462123666666',th4: 'Loreum Ipsum', th5: 'Loreum Ipsum', th6: ''}	


  ];
@Component({
    selector   : 'adminforms6-card',
    templateUrl: './adminforms6.component.html',
    styleUrls  : ['./adminforms6.component.scss']
})
export class Adminforms6Component
{
@ViewChild(MatPaginator) paginator: MatPaginator;
    imgs:any;
    preview: boolean = false;


    displayedColumns: string[] = ['th1', 'th2','th3','th4','th5', 'th6'];
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

      openKey(): void {
        const dialogRef1 = this.dialog.open(AdminformDialog4Component , {
          height: 'auto',
          width: '600px',
           data:{
           }
           
         });
      };

      openMenu(): void {
        const dialogRef1 = this.dialog.open(AdminformDialog3Component , {
          height: 'auto',
          width: '800px',
           data:{
           }
           
         });
      };
       openEye(): void {
        const dialogRef1 = this.dialog.open(AdminformDialog5Component , {
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


