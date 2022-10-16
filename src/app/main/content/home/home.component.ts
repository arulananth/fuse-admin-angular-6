import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TranslationService } from '@app/shared/services/translations/translation.service';


@Component({
    selector   : 'home-card',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.component.scss']
})
export class HomeComponent
{
    public dashCard = [
        { colorDark: '#986ca3', colorLight: '#bb9dc3', number: 0, title: 'LOREUM IPSUM', icon: 'people'},
        { colorDark: '#9954a9', colorLight: '#c295cc', number: 10, title: 'LOREUM IPSUM', icon: 'account_balance'},
        { colorDark: '#a34ba2', colorLight: '#b26cb1', number: 17, title: 'LOREUM IPSUM', icon: 'help_outline' },
        { colorDark: '#81558c', colorLight: '#a780b0', number: 2, title: 'LOREUM IPSUM', icon: 'swap_horiz' }

    ];

public profileCard = [
        { colorDark: '#ffffff', colorLight: '#b26cb1', number: 0, title: 'LOREUM IPSUM', icon: 'local_grocery_store',imgs:'profile'  },
        { colorDark: '#ffffff', colorLight: '#b26cb1', number: 10, title: 'LOREUM IPSUM', icon: 'new_releases',imgs:'profile'  },
        { colorDark: '#ffffff', colorLight: '#b26cb1', number: 17, title: 'LOREUM IPSUM', icon: 'assignments',imgs:'profile'  },
        { colorDark: '#ffffff', colorLight: '#b26cb1', number: 2, title: 'LOREUM IPSUM', icon: 'account_balance',imgs:'profile'  },
        { colorDark: '#ffffff', colorLight: '#b26cb1', number: 0, title: 'LOREUM IPSUM', icon: 'local_grocery_store',imgs:'profile'  },
        { colorDark: '#ffffff', colorLight: '#b26cb1', number: 10, title: 'LOREUM IPSUM', icon: 'new_releases',imgs:'profile'  },
        { colorDark: '#ffffff', colorLight: '#b26cb1', number: 17, title: 'LOREUM IPSUM', icon: 'assignments' ,imgs:'profile' },
        { colorDark: '#ffffff', colorLight: '#b26cb1', number: 2, title: 'LOREUM IPSUM', icon: 'account_balance',imgs:'profile'  }
    ];

        ngOnInit() {
           
        }

    constructor(
        private translation: TranslationService,
        public dialog: MatDialog
    )
    {
        this.translation.loadTranslation();
    }

   
}
