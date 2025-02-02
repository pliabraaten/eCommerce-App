package com.PL.ecommerce.dao;

import com.PL.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

// Repository interface: defines a set of standard data access methods (CRUD operations, pagination, sorting, etc
@CrossOrigin("http://localhost:4200")  // Accepts calls from web browser scripts for this origin
                                        // Origin is protocol + hostname + port
public interface ProductRepository extends JpaRepository<Product, Long> {  // Entity=Product, PrimaryKeyType=Long

    // Add new query method that matches category id by the parameter id value
        // Behind the scenes, Spring will execute a query like this: SELECT * FROM product WHERE category_id=?
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
    // Spring Data REST automatically exposes endpoint  http://localhost:8080/api/products/search/findByCategoryId?id=2

}
