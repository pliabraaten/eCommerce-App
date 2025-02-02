import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list.component.html',  // Old version without table
  // templateUrl: './product-list-table.component.html',  // With Bootstrap table
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Integrate service with Angular component

  // Property for array of products
  products: Product[] = [];

  // Inject ProductService dependency
  constructor(private productService: ProductService) { }

  // Similiar to @PostConstruct
  ngOnInit(): void {
    this.listProducts();  // Calls methods
  }

  listProducts() {
    this.productService.getProductList().subscribe(  // Method is invoked once you 'subscribe'
      data => {
        this.products = data  // Assigns results to the Product array
      }
    )  
  }
}
