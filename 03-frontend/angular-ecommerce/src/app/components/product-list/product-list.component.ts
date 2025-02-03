import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Integrate service with Angular component
  // Property for array of products
  products: Product[] = [];

  // Property for the selected category id (from router links app.module.ts)
  currentCategoryId: number = 1;
  currentCategoryName: string = "";
  searchMode: boolean = false;

  // Inject ProductService dependency and Activated Route
  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }  // Current active route that loaded the component

  // Similiar to @PostConstruct
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {  // Subscribe to paramMap for this route
      this.listProducts();  // Calls methods
    });
  }


  listProducts() {

    // Set searchMode to true if keyword has been passed in
    this.searchMode = this.route.snapshot.paramMap.has('keyword');  // Keyword is passed in from SearchComponent
    
    // If in searchMode, then run the search
    if (this.searchMode) {
      this.handleSearchProducts();
    }
    else {  // If not in searchMode, then just list products regular
      this.handleListProducts();
    }
  }

  // Run the product search
  handleSearchProducts() {

    // Get the inputted keyword
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // Search for products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  // List products
  handleListProducts() {

    // Check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id')
    // = this . use acivate route . state of route . map of all route params . read the id param

    // If the id parameter exists
    if (hasCategoryId) {
      // Get the "id" param string, convert string to a number with + 
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;  // ! is a non-null assertion operator

      // Get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    }
    else {
      // If category id is not available, default to category id 1
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    // Get the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(  // Method is invoked once you 'subscribe'
      data => {
        this.products = data  // Assigns results to the Product array
      }
    )
  }
}

