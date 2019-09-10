import { Component, AfterViewInit } from '@angular/core';
import { AppComponent }  from '../../app.component';

@Component({
    selector: 'scanner',
    templateUrl: './economics.html'
})

export class Economics {
  constructor(private app: AppComponent) {
      app.setPageSettings({
        pageContentFullWidth: true,
        pageContentInverseMode: true
        
      });
  }


}

