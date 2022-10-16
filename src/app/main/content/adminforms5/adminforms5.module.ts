import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule,MatCheckboxModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { Adminforms5Component } from './adminforms5.component';
import { AdminformDialog1Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialog2Component } from './adminform-dialog2/adminform-dialog2.component';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialog3Component } from './adminform-dialog3/adminform-dialog3.component';
import { AdminformDialog4Component } from './adminform-dialog4/adminform-dialog4.component';
import { AdminformDialog5Component } from './adminform-dialog5/adminform-dialog5.component';
import {PopoverModule} from "ngx-popover";



const routes = [
    {
        path     : 'adminforms5',
        component: Adminforms5Component
    }
];

@NgModule({
    declarations: [
        Adminforms5Component,AdminformDialogComponent,AdminformDialog1Component,AdminformDialog2Component,AdminformDialog3Component,AdminformDialog4Component,AdminformDialog5Component
        
    ],
    imports     : [
        RouterModule.forChild(routes),
        
        TranslateModule,
        FuseSharedModule,
        MatExpansionModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatDialogModule,
        DashcardModule,
        ProfilecardModule,
        PopoverModule,
        MatCheckboxModule
    ],
    entryComponents:[AdminformDialogComponent,AdminformDialog1Component,AdminformDialog2Component,AdminformDialog3Component,AdminformDialog4Component,AdminformDialog5Component],
    providers: [
    
  ],
    exports     : [
        Adminforms5Component
    ]
})

export class Adminforms5Module
{
}
