import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'  // Service is provided globally
})
export class ProductService {

  // REST API
  private baseUrl = 'http://localhost:8080/api/products';  // Used to fetch products

  private categoryUrl = 'http://localhost:8080/api/product-category'  // Used to fetch product categories

  // Injects Angular's built in service for making HTTP requests; injected so this service class can be used to make API requests  
  constructor(private httpClient: HttpClient) { }

  // Maps JSON data from Spring Data REST to product array based on the category id
  getProductList(theCategoryId: number): Observable<Product[]> {

    // Build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    // Make GET request
    return this.getProducts(searchUrl);
  }

  // Searches products by keyword
  searchProducts(theKeyword: string): Observable<Product[]> {
    // Build URL based on category keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    // Make GET request
    return this.getProducts(searchUrl);
  }

  // 
  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(  // pipe processes the Observable
      map(response => response._embedded.products)  // extracts array of products and returns it as the result
    );
  }

  // Retrieves list of product categories from the API
  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(  // Sends GET request to the categoryUrl endpoint
      map(response => response._embedded.productCategory)  // Returns observable ; maps the JSON data from Spring Data REST to ProductCategory array
    );
  }
}

// DEFINE STRUCTURE OF THE GET RESPONSES
// Unwraps the JSON from Spring Data REST _embedded entry
interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}

// Unwraps the JSON from Srping Data REST _embedded entry
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
