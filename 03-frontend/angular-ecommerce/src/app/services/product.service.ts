import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // REST API
  private baseUrl = 'http://localhost:8080/api/products';

  // Injects HttpClient  
  constructor(private httpClient: HttpClient) { }

  // Maps JSON data from Spring Data REST to product array
  getProductList(theCategoryId: number): Observable<Product[]> {

    // @TODO: need to build URL based on category id

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

// Unwraps the JSON from Srping Data REST _embedded entry
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
