import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { AdminsingleeditComponent } from './adminsingleedit.component';
import { AdminsingleDialogComponent } from './adminsingle-dialog/adminsingle-dialog.component';


const routes = [
    {
        path     : 'adminsingleedit',
        component: AdminsingleeditComponent
    }
];

@NgModule({
    declarations: [
        AdminsingleeditComponent,AdminsingleDialogComponent
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
        ProfilecardModule
    ],

    entryComponents:[AdminsingleDialogComponent],
    exports     : [
        AdminsingleeditComponent
    ]
})

export class AdminsingleeditModule
{
}
