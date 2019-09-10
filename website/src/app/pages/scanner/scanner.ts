import { Component, AfterViewInit } from '@angular/core';
import { AppComponent }  from '../../app.component';

@Component({
    selector: 'scanner',
    templateUrl: './scanner.html'
})

export class Scanner {
  constructor(private app: AppComponent) {
      app.setPageSettings({
        pageContentFullWidth: true,
        pageContentInverseMode: true
        
      });
  }


}

