import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FuseSharedModule } from '@fuse/shared.module';

import { Adminforms23Component } from './adminforms23.component';
import { AdminformDialog1Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialog2Component } from './adminform-dialog2/adminform-dialog2.component';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import {PopoverModule} from "ngx-popover";



const routes = [
    {
        path     : 'adminforms23',
        component: Adminforms23Component
    }
];

@NgModule({
    declarations: [
        Adminforms23Component,AdminformDialogComponent,AdminformDialog1Component,AdminformDialog2Component
        
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
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
    ],
    entryComponents:[AdminformDialogComponent,AdminformDialog1Component,AdminformDialog2Component],
    providers: [
    
  ],
    exports     : [
        Adminforms23Component
    ]
})

export class Adminforms23Module
{
}
