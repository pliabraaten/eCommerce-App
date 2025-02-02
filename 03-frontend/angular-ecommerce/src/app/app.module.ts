import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';  // Import for the product service
import { ProductService } from './services/product.service';

import { Routes, RouterModule } from '@angular/router';

// Add routes for category links
const routes: Routes = [
  // When path matches, create new instance of component
    // Checks paths in order listed
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},  // If not path given, redirect back; pathMatch on full path not just prefix
  {path: '**', redirectTo: '/products', pathMatch: 'full'},  // Wildcard path, any path that doesn't match the above path options
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule  // Import for the product service
  ],
  providers: [ProductService],  // Add reference to product service for injection
  bootstrap: [AppComponent]
})
export class AppModule { }
