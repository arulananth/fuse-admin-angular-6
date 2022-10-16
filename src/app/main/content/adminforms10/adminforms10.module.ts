import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { Adminforms10Component } from './adminforms10.component';
import { AdminformDialog1Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialog2Component } from './adminform-dialog2/adminform-dialog2.component';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import {PopoverModule} from "ngx-popover";



const routes = [
    {
        path     : 'adminforms10',
        component: Adminforms10Component
    }
];

@NgModule({
    declarations: [
        Adminforms10Component,AdminformDialogComponent,AdminformDialog1Component,AdminformDialog2Component
        
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
        PopoverModule
    ],
    entryComponents:[AdminformDialogComponent,AdminformDialog1Component,AdminformDialog2Component],
    providers: [
    
  ],
    exports     : [
        Adminforms10Component
    ]
})

export class Adminforms10Module
{
}
