# eCommerce-App

This ShopStop eCommerce-App is a full-stack web application that includes Angular for the front-end framework, Java Spring Boot for the back-end services, and MySQL for the database. 
HTML templates, initial db scripts, images, and guidance for this project came from the <em>Full Stack: Angular and Java Spring Boot E-Commerce Website</em> course on <a href="https://www.udemy.com/course/full-stack-angular-spring-boot-tutorial">Udemy<a/>.

## Release Plan

### v1.0
- set up Java Spring Boot back-end
- set up Angular front-end
- display a list of products

### v2.0
- online shop template integration
- search for products by category
- search for products by text box
- master/detail view of products
- pagination support for products
- add products to shopping card (CRUD)
- shopping cart check out

### v3.0
- User login/logout security
- Track previous orders for logged-in users

<br/>

## v1.0 Development Steps

### Java Spring Boot Back-End
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

<br/>

## v2.0 Development Steps

### Online Shop Template
1. download the HTML template starter files
2. install Bootstrap CSS styles locally using npm
3. add local custom CSS styles to Angular src/styles.css file
4. integrate template files into Angular app
5. add support for icons and logos
6. add all products to the db and add product images
