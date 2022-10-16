import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { fuseConfig } from './fuse-config';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { AdminfullModule } from './main/content/adminfull/adminfull.module';
import { AdminuploadModule } from './main/content/adminupload/adminupload.module';
import { AdmintableModule } from './main/content/admintable/admintable.module';
import { HomeModule } from './main/content/home/home.module';
import { AdminformModule } from './main/content/adminform/adminform.module';
import { AdminsingleformModule } from './main/content/adminsingleform/adminsingleform.module';
import { AdminsingleeditModule } from './main/content/adminsingleedit/adminsingleedit.module';
import { AdminsameformModule } from './main/content/adminsameform/adminsameform.module';
import { AdminformsModule } from './main/content/adminforms/adminforms.module';
import { Adminforms1Module } from './main/content/adminforms1/adminforms1.module';
import { Adminforms2Module } from './main/content/adminforms2/adminforms2.module';
import { Adminforms3Module } from './main/content/adminforms3/adminforms3.module';
import { Adminforms4Module } from './main/content/adminforms4/adminforms4.module';
import { Adminforms5Module } from './main/content/adminforms5/adminforms5.module';
import { Adminforms6Module } from './main/content/adminforms6/adminforms6.module';
import { Adminforms7Module } from './main/content/adminforms7/adminforms7.module';
import { Adminforms8Module } from './main/content/adminforms8/adminforms8.module';
import { Adminforms9Module } from './main/content/adminforms9/adminforms9.module';
import { Adminforms10Module } from './main/content/adminforms10/adminforms10.module';
import { Adminforms11Module } from './main/content/adminforms11/adminforms11.module';
import { Adminforms12Module } from './main/content/adminforms12/adminforms12.module';
import { Adminforms13Module } from './main/content/adminforms13/adminforms13.module';
import { Adminforms14Module } from './main/content/adminforms14/adminforms14.module';
import { Adminforms15Module } from './main/content/adminforms15/adminforms15.module';
import { Adminforms16Module } from './main/content/adminforms16/adminforms16.module';
import { Adminforms17Module } from './main/content/adminforms17/adminforms17.module';
import { Adminforms18Module } from './main/content/adminforms18/adminforms18.module';
import { Adminforms19Module } from './main/content/adminforms19/adminforms19.module';
import { Adminforms20Module } from './main/content/adminforms20/adminforms20.module';
import { Adminforms21Module } from './main/content/adminforms21/adminforms21.module';
import { Adminforms22Module } from './main/content/adminforms22/adminforms22.module';
import { Adminforms23Module } from './main/content/adminforms23/adminforms23.module';
import { Adminforms24Module } from './main/content/adminforms24/adminforms24.module';
import { Adminforms25Module } from './main/content/adminforms25/adminforms25.module';
import { Adminforms26Module } from './main/content/adminforms26/adminforms26.module';
import { Adminforms27Module } from './main/content/adminforms27/adminforms27.module';
const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'home'
    },
    {
        path      : 'home',
        redirectTo: 'home'
    }
    ,
    {
        path      : 'adminform',
        redirectTo: 'adminform'
    },
    {
        path      : 'adminsingleform',
        redirectTo: 'adminsingleform'
    }
    ,
    {
        path      : 'adminsameform',
        redirectTo: 'adminsameform'
    },
    {
        path:'admintable',
        redirectTo:'admintable'
    }
    ,
    {
        path:'adminfull',
        redirectTo:'adminfull'
    }
    ,
    {
        path:'adminupload',
        redirectTo:'adminupload'
    },
    {
        path:'adminsingleedit',
        redirectTo:'adminsingleedit'
    }
    ,
    {
        path:'adminforms',
        redirectTo:'adminforms'
    },
    {
        path:'adminforms1',
        redirectTo:'adminforms1'
    },
    {
        path:'adminforms2',
        redirectTo:'adminforms2'
    },
    {
        path:'adminforms3',
        redirectTo:'adminforms3'
    },
    {
        path:'adminforms4',
        redirectTo:'adminforms4'
    },
    {
        path:'adminforms5',
        redirectTo:'adminforms5'
    }
    ,
    {
        path:'adminforms6',
        redirectTo:'adminforms6'
    }
   ,
    {
        path:'adminforms7',
        redirectTo:'adminforms7'
    },
    {
        path:'adminforms8',
        redirectTo:'adminforms8'
    },
    {
        path:'adminforms9',
        redirectTo:'adminforms9'
    },
    {
        path:'adminforms10',
        redirectTo:'adminforms10'
    }
    ,
    {
        path:'adminforms11',
        redirectTo:'adminforms11'
    }
    ,
    {
        path:'adminforms12',
        redirectTo:'adminforms12'
    }
    ,
    {
        path:'adminforms13',
        redirectTo:'adminforms13'
    },
    {
        path:'adminforms14',
        redirectTo:'adminforms14'
    }
    ,
    {
        path:'adminforms15',
        redirectTo:'adminforms15'
    },
    {
        path:'adminforms16',
        redirectTo:'adminforms16'
    },
    {
        path:'adminforms17',
        redirectTo:'adminforms17'
    },
    {
        path:'adminforms18',
        redirectTo:'adminforms18'
    }
    ,
    {
        path:'adminforms19',
        redirectTo:'adminforms19'
    },
    {
        path:'adminforms20',
        redirectTo:'adminforms20'
    }
   
    ,
    {
        path:'adminforms21',
        redirectTo:'adminforms21'
    }
     ,
    {
        path:'adminforms22',
        redirectTo:'adminforms22'
    }
    ,
    {
        path:'adminforms23',
        redirectTo:'adminforms23'
    }
    ,
    {
        path:'adminforms24',
        redirectTo:'adminforms24'
    }
     ,
    {
        path:'adminforms25',
        redirectTo:'adminforms25'
    }
    ,
    {
        path:'adminforms26',
        redirectTo:'adminforms26'
    }
    ,
    {
        path:'adminforms27',
        redirectTo:'adminforms27'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
       FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        HomeModule,
        AdminformModule,
        AdminsingleformModule,
        AdminsameformModule,
        AdmintableModule,
        AdminfullModule,
        AdminuploadModule,
        AdminsingleeditModule,
        AdminformsModule,
        Adminforms1Module,
        Adminforms2Module,
        Adminforms3Module,
        Adminforms4Module,
        Adminforms5Module,
        Adminforms6Module,
        Adminforms7Module,
        Adminforms8Module,
        Adminforms9Module,
        Adminforms10Module,
        Adminforms11Module,
        Adminforms12Module,
        Adminforms13Module,
        Adminforms14Module,
        Adminforms15Module,
        Adminforms16Module,
        Adminforms17Module,
        Adminforms18Module,
        Adminforms19Module,
        Adminforms20Module,
        Adminforms21Module,
        Adminforms22Module,
        Adminforms23Module,
        Adminforms24Module,
        Adminforms25Module,
        Adminforms26Module,
        Adminforms27Module,
        NgbModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
