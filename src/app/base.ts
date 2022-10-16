import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { URLSearchParams } from '@angular/http';
import * as _ from 'lodash';
abstract class BaseCtrl {

   api: any;
  api2: any;
  abstract sort: any;
  abstract meta: any;
  abstract busy: Subscription;
  abstract crud: any;
  abstract snack: MatSnackBar;
  abstract modal: any;
  abstract data: any[] = [];
  filterText = '';
  filterInput: FormControl;
  constructor() {
    this.api2 = this.api2 || this.api
  }
  flush = (noResetData: Boolean = true) => {
    this.meta.after = 0;
    this.meta.end = false;
    this.meta.skip = 0;
    // if (!noResetData) 
    this.data = []; // Reset query parameters        
  }
  scroll() {
    if (this.meta.busy || this.meta.end) return;
    this.meta.busy = false;
    let q = { skip: this.meta.after };
    this.getData(q, true);
  }
  order(predicate) {
    this.flush();
    this.sort.reverse = (this.sort.predicate === predicate) ? !this.sort.reverse : false;
    this.sort.predicate = predicate;
    let pr = predicate;
    if (this.sort.reverse) { pr = '-' + pr; }
    this.meta.sort = pr;
    this.getData({ sort: pr });
  }
  clone(item: any) {
    if (!item) { return; }
    this.modal.confirm('Copy', 'Would you like to copy the ' + this.api2 + '?').subscribe(result => {
      if (result) {
        let clone = _.cloneDeep(item);
        delete clone._id;
        this.crud.add(this.api2 || this.api, clone).subscribe(data => { this.flush(); this.filterText = ''; this.getData() }, err => this.snack.open(err, 'OK', { duration: 2000 }));
      }
    })
  }
  delete(item: any) {
    if (!item) { return; }
    this.modal.confirm('Delete?', 'Would you like to delete the ' + this.api2 + '?').subscribe(result => {
      if (result) {
        this.crud.delete(this.api2 || this.api, item._id).subscribe(data => { this.flush(); this.filterText = ''; this.getData() }, err => this.snack.open(err, 'OK', { duration: 2000 }));
      }
    })
  }
  getData(q?: any, scrolled?: boolean) {
    let limit = '20';
    if(q) {
      if(q.limit) limit=q.limit
    }
    q = q || {};
    if (q.sort) { this.meta.sort = q.sort; }
    let params = new URLSearchParams();
    params.set('limit', limit);
    q.limit ? params.set('limit', q.limit) : params.set('limit', limit);
    q.skip ? params.set('skip', q.skip) : params.set('skip', '0');
    if (this.meta.sort) { params.set('sort', this.meta.sort); };
    if (q.where) params.set('where', JSON.stringify(q.where));
    if (q.search || this.meta.search) {
      this.meta.search = q.search; params.set('search', JSON.stringify({ q: q.search }))
    }
    if (q.sort) { params.set('sort', q.sort) }
    if (q.type) { params.set('type', q.type) }
    if (this.meta.busy || this.meta.end)
      return;
    this.meta.busy = true;
    this.busy = this.crud.get(this.api, params, true).subscribe(data => {
      this.meta.filtered = data.length + this.meta.after;
      this.data = scrolled ? this.data.concat(data) : data;
      let api=this.api
      data.forEach(function(d)
      {
          let par={price:455,mrp:455,name:d.description,api:api}
        
             //console.log(par);
            //this.crud.put("products/"+d._id,par,true).subscribe(pro => {;
            //});
      },this)
      console.log(data.length)
      this.meta.busy = false;
      if (data.length >= limit) {
        this.meta.after = this.meta.filtered;
        this.meta.end = false;
      } else {
        this.meta.end = true;
      }
    }, error => this.snack.open(<any>error, 'OK', { duration: 2000 }));
  }
}

export default BaseCtrl;
