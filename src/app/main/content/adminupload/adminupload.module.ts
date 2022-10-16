import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { AdminuploadComponent } from './adminupload.component';

import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
 // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

const routes = [
    {
        path     : 'adminupload',
        component: AdminuploadComponent
    }
];

@NgModule({
    declarations: [
        AdminuploadComponent,AdminformDialogComponent
        
    ],
    imports     : [
        RouterModule.forChild(routes),
        DropzoneModule,
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
    entryComponents:[AdminformDialogComponent],
    providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
    exports     : [
        AdminuploadComponent
    ]
})

export class AdminuploadModule
{
}
