package com.PL.ecommerce.dao;

import com.PL.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository interface: defines a set of standard data access methods (CRUD operations, pagination, sorting, etc
public interface ProductRepository extends JpaRepository<Product, Long> {  // Entity=Product, PrimaryKeyType=Long


}
