# eCommerce-App


## Release Plan

### v1.0
- Show a list of products

### v2.0
- Add products to shopping cart (CRUD)
- Shopping cart check out

### v3.0
- User login/logout security
- Track previous orders for logged-in users

<br/>

## v1.0 Development Steps

### Spring Boot Back-End
1. Set up database tables
2. Create Spring Boot starter project (start.spring.io)
3. Develop the Entities
4. Create REST APIs with Spring Data JPA Repositories and Spring Data REST
5. Configure REST API for read-only; disable HTTP methods: POST, PUT, DELETE

### Angular Front-End
1. Create Angular project (add Bootstrap support)
2. Create Angular component (product-lists)
3. Develop TypeScript classes
4. Create Angular service to call REST APIs
5. Update Angular component to subscribe to data from Angular service
6. Display the data in an HTML page
7. Add CrossOrigin support to Spring Boot app
