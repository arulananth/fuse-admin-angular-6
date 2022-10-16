import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { AdmintableComponent } from './admintable.component';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';

const routes = [
    {
        path     : 'admintable',
        component: AdmintableComponent
    }
];

@NgModule({
    declarations: [
        AdmintableComponent,
        AdminDialogComponent
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
        MatDialogModule
    ],

    entryComponents: [ 
        AdminDialogComponent
    ],
    
    exports     : [
        AdmintableComponent
    ]
})

export class AdmintableModule
{
}
