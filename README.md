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

```bash
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
```
#### API Endpoints

Authentication
Method	Endpoint	Description	Auth
POST	/api/auth/register	Register a user	No
POST	/api/auth/login	Login user	No
GET	/api/auth/profile	Get authenticated user information	Yes

Tasks
Method	Endpoint	Description	Auth
POST	/api/tasks	Create a task	Yes
GET	/api/tasks	Get all user's tasks	Yes
GET	/api/tasks/:id	Get one task	Yes
PUT	/api/tasks/:id	Update a task	Yes
PATCH	/api/tasks/:id	Partially update a task	Yes
DELETE	/api/tasks/:id	Delete a task	Yes

#### Authentication

After login, the API returns a JWT token.

For protected routes, send the token using:

Authorization: Bearer YOUR_JWT_TOKEN
Example Requests
`Register`

```bash
POST /api/auth/register
{
  "name": "Hassan Obaid",
  "email": "hassan@example.com",
  "password": "123456"
}
```

`Login`

```bash
POST /api/auth/login
{
  "email": "hassan@example.com",
  "password": "123456"
}
```

`Create Task`

```bash
POST /api/tasks
{
  "title": "Learn Express CRUD",
  "description": "Build REST API using Express and MongoDB"
}
```

`Update Task`

```bash
PATCH /api/tasks/TASK_ID
{
  "completed": true
}
```

#### HTTP Status Codes

The API uses standard HTTP status codes:

200 - Successful request
201 - Resource created
400 - Bad request / validation error
401 - Unauthorized
404 - Resource not found
409 - Conflict / duplicate resource
500 - Internal server error

`Security`

Passwords are hashed using bcryptjs.
Authentication is implemented using JWT.
Protected routes require a valid JWT.
Users can only access their own tasks.
Environment variables are excluded from Git.
Learning Outcomes

This project demonstrates:

Express routing
REST API design
Middleware
MVC-style project structure
MongoDB
Mongoose schemas and models
CRUD operations
Password hashing
JWT authentication
Error handling
API testing with Postma
