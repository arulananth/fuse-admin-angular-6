import { Component, OnInit ,Input } from '@angular/core';
import { Observable ,  Observer } from 'rxjs';

import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'admin-dashcard',
    templateUrl: './dashcard.component.html',
    styleUrls  : ['./dashcard.component.scss']
})
export class DashcardComponent implements OnInit
{
   
  @Input() dashData: any;
    
    constructor() {

     }

    ngOnInit() {
    }


}
