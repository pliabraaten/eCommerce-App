package com.PL.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.sql.Date;

@Entity  // JPA entity
@Table(name="product")  // Map it to db product table
@Data  // Lombok -> provides getters/setters
public class Product {

    // Maps variables to columns in product db table
    @Id  // Primary key
    @GeneratedValue(strategy = GenerationType.AUTO)  // Autogenerates IDs
    @Column(name = "id")  // Maps to db column
    private Long id;

    @ManyToOne  // This product maps to one category
    @JoinColumn(name = "category_id", nullable = false)  // category_id is foreign key
    private ProductCategory category;

    @Column(name = "sku")
    private String sku;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private  String description;

    @Column(name = "unit_price")
    private BigDecimal unitPrice;

    @Column(name = "image_url")
    private  String imageURL;

    @Column(name = "active")
    private boolean active;

    @Column(name = "units_in_stock")
    private int unitsInStock;

    @Column(name = "date_created")
    @CreationTimestamp  // Hibernate will automatically manage timestamps
    private Date dateCreated;

    @Column(name = "last_updated")
    @UpdateTimestamp  // Hibernate will automatically manage timestamps
    private Date lastUpdated;

}
