import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import {PopoverModule} from "ngx-popover";
import { AdminsingleformComponent } from './adminsingleform.component';
import { AdminsingleDialogComponent } from './adminsingle-dialog/adminsingle-dialog.component';


const routes = [
    {
        path     : 'adminsingleform',
        component: AdminsingleformComponent
    }
];

@NgModule({
    declarations: [
        AdminsingleformComponent,AdminsingleDialogComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
ReactiveFormsModule ,
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

    entryComponents:[AdminsingleDialogComponent],
    exports     : [
        AdminsingleformComponent
    ]
})

export class AdminsingleformModule
{
}
