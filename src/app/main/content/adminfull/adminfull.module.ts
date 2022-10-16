import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
import {PopoverModule} from "ngx-popover";
import { FuseSharedModule } from '@fuse/shared.module';

import { AdminfullComponent } from './adminfull.component';

import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
const routes = [
    {
        path     : 'adminfull',
        component: AdminfullComponent
    }
];

@NgModule({
    declarations: [
        AdminfullComponent,AdminformDialogComponent
        
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        ReactiveFormsModule,
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
    entryComponents:[AdminformDialogComponent],
    
    exports     : [
        AdminfullComponent
    ]
})

export class AdminfullModule
{
}
