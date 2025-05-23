📒 Address Book API

📝 Overview

This is a Spring Boot application that provides a secure Address Book API with user authentication, JWT-based security, and CRUD operations for managing contacts. The project follows RESTful principles and includes Swagger documentation for easy API exploration.



🚀 Tech Stack

✅Spring Boot 🛠️

✅Spring Security 🔒

✅JWT Authentication 🔑

✅Spring Data JPA 🗄️

✅Lombok 📌

✅RabbitMQ 📨

✅Redis Cache ⚡

✅Swagger OpenAPI 📃

✅H2/MySQL Database 💾

✅JUnit & Mockito (API Testing) ✅

✅Maven 🏗️




📚 Learning Topics Covered



✅ Spring Boot REST API Development

✅ User Authentication & Authorization (JWT)

✅ Spring Security for Securing APIs

✅ CRUD Operations (Create, Read, Update, Delete)

✅ Data Validation with @Valid

✅ Password Encryption with BCrypt

✅ Role-Based Access Control

✅ Environment-Based Configurations (dev, prod, staging)

✅ Redis for Caching Contact Data

✅ RabbitMQ Messaging Queue Integration

✅ JUnit & Mockito for API Testing

✅ Swagger for API Documentation




🌐 API Endpoints

🔑 Authentication & User Management APIs

| Method  | Endpoint                   | Description                     | Access  |
|---------|----------------------------|---------------------------------|---------|
| 🔹 `POST`   | `/auth/register`          | Register a new user             | Public  |
| 🔹 `POST`   | `/auth/login`             | Login & get JWT token           | Public  |
| 🔹 `GET`    | `/auth/verify`            | Verify email using token        | Public  |
| 🔹 `POST`   | `/auth/forget-password`   | Request password reset          | Public  |
| 🔹 `POST`   | `/auth/reset-password`    | Reset password via token        | Public  |
| 🔹 `POST`   | `/auth/logout`            | Logout user & invalidate token  | Private |


 📖 Address Book APIs

| Method  | Endpoint                   | Description                                | Access  |
|---------|----------------------------|--------------------------------------------|---------|
| 📝 `POST`   | `/addressbook/add`         | Add a new contact                          | Private |
| 📂 `GET`    | `/addressbook/get`         | Retrieve all contacts (Cached with Redis) | Private |
| 🔍 `GET`    | `/addressbook/get/{id}`    | Retrieve a contact by ID (Cached)         | Private |
| ✏️ `PUT`    | `/addressbook/update/{id}` | Update a contact by ID                    | Private |
| 🗑️ `DELETE` | `/addressbook/delete/{id}` | Delete a contact by ID                    | Private |





⚡ Redis Caching

This application uses Redis to cache contact data, reducing database load and improving performance.

🛠️ Configure Redis in application.properties

spring.cache.type=redis

spring.redis.host=localhost

spring.redis.port=6379




📌 API Documentation

You can explore API documentation via Swagger UI at:

🔗 http://localhost:8080/swagger-ui.html



📬 Messaging Queue (RabbitMQ)

This project uses RabbitMQ for background task processing.

Access RabbitMQ dashboard at http://localhost:15672.


