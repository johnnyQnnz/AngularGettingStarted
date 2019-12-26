import { IProduct } from './product';
import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
    pageTitle: string = 'Product List';
    listFilter: string = 'cart';
    products: IProduct
}