import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { AdminformsComponent } from './adminforms.component';
import { AdminformDialog1Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialog2Component } from './adminform-dialog2/adminform-dialog2.component';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import {PopoverModule} from "ngx-popover";



const routes = [
    {
        path     : 'adminforms',
        component: AdminformsComponent
    }
];

@NgModule({
    declarations: [
        AdminformsComponent,AdminformDialogComponent,AdminformDialog1Component,AdminformDialog2Component
        
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
        AdminformsComponent
    ]
})

export class AdminformsModule
{
}
