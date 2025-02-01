package com.PL.ecommerce.dao;

import com.PL.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")  // Accepts calls from web browser scripts for this origin
                                        // Origin is protocol + hostname + port
// Sets relationship and path; name of JSON entry = productCategory ; path: /product-category
    // Custom: otherwise default just adds s to path at end of entity name
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository <ProductCategory, Long> {  // Entity=ProductCategory, PrimaryKeyType=Long


}
