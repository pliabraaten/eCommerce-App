import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductCategory } from 'src/app/common/product-category';

@Component({
  selector: 'app-product-category-menu',  // Tag to include this component in the html as <app-product-category-menu></app-product-category-menu>
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  // Define property as empty array to be populated with data from the service
  productCategories: ProductCategory[] = [];

  // Constructor and injects the ProductService into the component
  constructor(private productService: ProductService) {}

  // Called when component is intialized
  ngOnInit(): void {
    this.listProductCategories();  
  }

  // Fetchs the product categories as soon as this component loads
  listProductCategories() {
    this.productService.getProductCategories().subscribe(  // Calls the getProductCategories() method from ProductService
                                          // .subscribe() is used to listen for data when the HTTP request is completed (Angular's HTTP requests are asynchronous)
      data => {  // data represents the response from the server, which is an array of product categories
        console.log('Product Categories=' + JSON.stringify(data))  // Converts the data object to a JSON string and prints in browser console
        this.productCategories = data;  // Assign data to the productCategories propoerty of the class
        // this.productCategories is used in the component’s HTML (*ngFor loop) to dynamically display categories.
      }
    );
  }
}
