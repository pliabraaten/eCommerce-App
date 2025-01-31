package com.PL.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity  // JPA entity
@Table(name="product_category")  // Map it to db product table
//@Data  // Lombok -> provides getters/setters -- known bug
@Getter  // Added due to ^ bug
@Setter
public class ProductCategory {

    // Maps variables to columns in product db table
    @Id  // Primary key
    @GeneratedValue(strategy = GenerationType.AUTO)  // Autogenerates IDs
    @Column(name = "id")  // Maps to db column
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")  // Sets relationship category contains multi products
    private Set<Product> products;


}
