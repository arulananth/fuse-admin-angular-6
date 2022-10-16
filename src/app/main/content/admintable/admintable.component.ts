import { Component, ViewChild } from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';

import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';



@Component({
    selector   : 'admin-table',
    templateUrl: './admintable.component.html',
    styleUrls  : ['./admintable.component.scss']
})
export class AdmintableComponent
{
    public isClicked = [];
    status: boolean = false;
     displayedColumns: string[] = [
        
        'data1', 
        'data2', 
        'data3',
        
      
      ];
         dataSource = new MyDataSource(DATA);
         isExtendedRow = (index, item) => item.extend;
    
        ngOnInit() {
            
        }

    constructor(
        private translation: TranslationService,
        public dialog: MatDialog
    )
    {
        this.translation.loadTranslation();
    }

    openDelet(): void {
        this.dialog.open(AdminDialogComponent , {
          height: 'auto',
          width: '600px',
           data:{
           }
           
         });
    
      };

      clickEvent(item)
      {
              console.log(item);
              this.status = !this.status;  

                 
      }
}

const DATA = [
  { data1: 'Loreum  Ipsum', data2: 'profile' , data3:'1', extend: true },
  { data1: 'Loreum  Ipsum', data2: 'profile' , data3:'2' },
  { data1: 'Loreum  Ipsum', data2: 'profile' , data3:'3'},
  { data1: 'Loreum  Ipsum', data2: 'profile' , data3:'4' , extend: true },
  { data1: 'Loreum  Ipsum', data2: 'profile' , data3:'5'},
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