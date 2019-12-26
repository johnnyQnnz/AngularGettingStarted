import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';
import { IPerfLoggingPrefs } from 'selenium-webdriver/chrome';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            productId: 1,
            productName: 'hammer ACME',
            releaseDate: 'some date',
            serialNumber: 'dfgd-1233',
            rating: 4.3
        },
        {
            productId: 2,
            productName: 'saw ACME',
            releaseDate: 'some date',
            serialNumber: 'sdfh-2342',
            rating: 2.6
        },
        {
            productId: 3,
            productName: 'bucket ACME',
            releaseDate: 'some date',
            serialNumber: 'prot-2343',
            rating: 3.4
        }
    ]

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = '';

    }
    toggleImage() {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter( (p: IProduct) => p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onNotify(message: string): void {
        console.log(message);
    }
    ngOnInit(): void {
        console.log('Running OnInit');
    }
}
