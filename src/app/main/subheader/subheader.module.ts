import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSubheaderComponent } from 'app/main/subheader/subheader.component';
import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';

@NgModule({
    declarations: [
       FuseSubheaderComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,
        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule
    ],
    exports     : [
        FuseSubheaderComponent
    ]
})
export class FuseSubheaderModule
{
}
