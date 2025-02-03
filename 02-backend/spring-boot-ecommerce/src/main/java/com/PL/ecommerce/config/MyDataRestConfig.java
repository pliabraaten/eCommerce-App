package com.PL.ecommerce.config;

import com.PL.ecommerce.entity.Product;
import com.PL.ecommerce.entity.ProductCategory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

// Configure REST API to READONLY -> disable PUT, POST, and DELETE
@Configuration  // For Spring scanning to pick it up
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    // Autowire JPA entity manager
    @Autowired
    public MyDataRestConfig(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        // Set unsupported methods
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        // disable HTTP methods for Product: PUT, POST, DELETE
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // disable HTTP methods for ProductCategory: PUT, POST, DELETE
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // Call internal help method to expose ids
        exposeIds(config);
    }

    private void exposeIds(RepositoryRestConfiguration config) {

        // EXPOSE ENTITY IDS IN JSON RESPONSES

        // Get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        // Create an array for the entity types (class with @Entity)
        List<Class> entityClasses = new ArrayList<>();

        // Get entity types for the entities
        for (EntityType tempEntityType : entities) {
            entityClasses.add(tempEntityType.getJavaType());
        }

        // Expose the entity ids for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);  // Converts list into an array
        config.exposeIdsFor(domainTypes);  // API responses will include entity IDs

    }
}
