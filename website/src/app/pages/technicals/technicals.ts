import { Component, AfterViewInit } from '@angular/core';
import { AppComponent }  from '../../app.component';

@Component({
    selector: 'technicals',
    templateUrl: './technicals.html'
})

export class Technicals {
  constructor(private app: AppComponent) {
      app.setPageSettings({
        pageContentFullWidth: true,
        pageContentInverseMode: true
        
      });
  }


}

