import { Component } from '@angular/core';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  appName;
  appVersion;

  ngOnInit() {
    this.appName = environment.appName;
    this.appVersion = environment.appVersion;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
