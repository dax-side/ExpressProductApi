# Product API

This Express.js API lets you manage products.

## Endpoints

### Create a Product
- **Method**: POST
- **URL**: `http://localhost:1888/products`
- **Body** (JSON):
  ```json
  {
    "name": "Wireless Headphones",
    "price": 150,
    "description": "Comfortable over-ear headphones with noise cancellation"
  }
  ```
- **Response**: Returns 201 with the new product.

### Get All Products
- **Method**: GET
- **URL**: `http://localhost:1888/products`
- **Response**: Returns 200 with the list of products.

### Get Product by ID
- **Method**: GET
- **URL**: `http://localhost:1888/products/{id}`
- **Example**: `http://localhost:1888/products/1`
- **Response**: Returns 200 with the product or 404 if it does not exist.

### Update Product
- **Method**: PUT
- **URL**: `http://localhost:1888/products/{id}`
- **Body** (JSON): Include the fields you want to change.
- **Example**: `http://localhost:1888/products/1` with body:
  ```json
  {
    "name": "Updated Headphones",
    "price": 160,
    "description": "Updated description"
  }
  ```
- **Response**: Returns 200 with the updated product or 404 if not found.

### Delete Product
- **Method**: DELETE
- **URL**: `http://localhost:1888/products/{id}`
- **Example**: `http://localhost:1888/products/1`
- **Response**: Returns 200 if deleted or 404 if not found.

## Running the API
1. Run `npm install` to get the dependencies.
2. Run `npm start` to start the server.
3. The server runs on `http://localhost:1888`.