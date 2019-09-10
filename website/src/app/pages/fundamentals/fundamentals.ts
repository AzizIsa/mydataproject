import { Component, AfterViewInit } from '@angular/core';
import { AppComponent }  from '../../app.component';

@Component({
    selector: 'fundamentals',
    templateUrl: './fundamentals.html'
})

export class Fundamentals {
  constructor(private app: AppComponent) {
      app.setPageSettings({
        pageContentFullWidth: true,
        pageContentInverseMode: true
        
      });
  }


}

