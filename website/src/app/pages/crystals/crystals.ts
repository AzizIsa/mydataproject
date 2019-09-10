import { Component, AfterViewInit } from '@angular/core';
import { AppComponent }  from '../../app.component';

@Component({
    selector: 'crystals',
    templateUrl: './crystals.html'
})

export class Crystals{
  constructor(private app: AppComponent) {
      app.setPageSettings({
        pageContentFullWidth: true,
        pageContentInverseMode: true
        
      });
  }


}

