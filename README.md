# Task Management REST API

A RESTful Task Management API built with Node.js, Express, MongoDB, and Mongoose.

This project includes JWT-based authentication, protected routes, CRUD operations, validation, and centralized error handling.

## Features

- User registration
- User login
- JWT authentication
- Protected API routes
- Create tasks
- Get all tasks
- Get a single task
- Update tasks
- Delete tasks
- MongoDB database with Mongoose
- Input validation
- Centralized error handling
- User-specific tasks

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- Postman

## Project Structure

```text
task-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── .env
├── .gitignore
├── README.md
├── server.js
├── package.json
└── package-lock.json
