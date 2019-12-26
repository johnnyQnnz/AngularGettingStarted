import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IProduct } from './product';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {

    }

    getProducts(): IProduct[] {
        return [
            {
                productId: 1,
                productName: 'hammer ACME',
                releaseDate: 'some date',
                productCode: 'dfgd-1233',
                starRating: 4.3
            },
            {
                productId: 2,
                productName: 'saw ACME',
                releaseDate: 'some date',
                productCode: 'sdfh-2342',
                starRating: 2.6
            },
            {
                productId: 3,
                productName: 'bucket ACME',
                releaseDate: 'some date',
                productCode: 'prot-2343',
                starRating: 3.4
            }
        ];
    }

    getProductsFromUrl(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productsUrl).pipe(
            tap(data => {
                console.log('All: ' + JSON.stringify(data));
            }),
            catchError(this.handleError)
        );
    }
    handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if(err.error instanceof ErrorEvent) errorMessage = `An error ocurred: ${err.message}`;
        
        else errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}