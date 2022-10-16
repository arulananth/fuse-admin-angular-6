import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
import {PopoverModule} from "ngx-popover";
import { FuseSharedModule } from '@fuse/shared.module';

import { AdminsameformComponent } from './adminsameform.component';


const routes = [
    {
        path     : 'adminsameform',
        component: AdminsameformComponent
    }
];

@NgModule({
    declarations: [
        AdminsameformComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
ReactiveFormsModule,
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
        MatCheckboxModule,
        PopoverModule
    ],

    
    exports     : [
        AdminsameformComponent
    ]
})

export class AdminsameformModule
{
}
