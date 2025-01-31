package com.PL.ecommerce.dao;

import com.PL.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

// Sets relationship and path; name of JSON entry = productCategory ; path: /product-category
    // Custom: otherwise default just adds s to path at end of entity name
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository <ProductCategory, Long> {  // Entity=ProductCategory, PrimaryKeyType=Long


}
