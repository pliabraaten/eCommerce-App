package com.PL.ecommerce.dao;

import com.PL.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

// Repository interface: defines a set of standard data access methods (CRUD operations, pagination, sorting, etc
@CrossOrigin("http://localhost:4200")  // Accepts calls from web browser scripts for this origin
                                        // Origin is protocol + hostname + port
public interface ProductRepository extends JpaRepository<Product, Long> {  // Entity=Product, PrimaryKeyType=Long


}
