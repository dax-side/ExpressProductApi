# Product API

Backend API for managing products with user authentication, image uploads, and external data fetching.

## Setup
```bash
npm install
npm start
```
Runs on `http://localhost:1888`

---

## Authentication

### Register
**POST** `/auth/register`
```json
{
  "email": "user@test.com",
  "password": "Password123!",
  "role": "admin"
}
```
Leave `role` empty for regular user access. Password requires 8+ characters with uppercase, lowercase, number, and special character.

### Login
**POST** `/auth/login`
```json
{
  "email": "user@test.com",
  "password": "Password123!"
}
```
Returns a JWT token. Add it to the Authorization header as `Bearer <token>` for protected routes.

---

## Products

Products require authentication. Admin role needed for create, update, and delete operations.

### Create Product
**POST** `/products` (form-data)
- `name` = "Laptop"
- `price` = 1500
- `description` = "Gaming laptop"
- `image` = file upload (optional)

Images get uploaded to Cloudinary. Response includes the imageUrl.

### Get All Products
**GET** `/products`

### Get Product by ID
**GET** `/products/{id}`

### Update Product
**PUT** `/products/{id}`
```json
{
  "name": "Updated Laptop",
  "price": 1600,
  "description": "Updated description"
}
```

### Delete Product
**DELETE** `/products/{id}`

---

## Todos

Fetches data from JSONPlaceholder and stores it in MongoDB.

### Fetch Todo
**GET** `/todos/fetch` or **GET** `/todos/fetch/{id}`

Pulls todo data from the external API and saves it locally. Fetches todo 1 by default, or specify any ID (1-200).

Examples:
- `/todos/fetch` - fetches todo 1
- `/todos/fetch/5` - fetches todo 5

No authentication needed.

### Get All Todos
**GET** `/todos`

Shows all todos saved in the database.