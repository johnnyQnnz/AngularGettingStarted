import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = []
    constructor(private productService: ProductService) {
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
        this.productService.getProductsFromUrl().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    }
}
