import { Component } from '@angular/core';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  location = 'pending...';
  constructor(private cartService: CartService) {}

  share() {
    window.alert('The product has been shared!');
  }

  getLocation() {
    this.cartService.getLocation().subscribe({
      next: (data) => {
        console.log(data);
        this.location = data.status;
      },
      error: (error) => {
        this.location = error.message;
        console.error('There was an error!', error);
      },
    });
    // this.cartService.getLocation();
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
