# API SPEC

Api Specification for Toko Pintar consist Books, Users and Orders entity.

# USER

## Register

Request :

- Method : POST
- Endpoint : `/api/users`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "username": "string",
  "password": "hash(string)",
  "email": "string",
  "role": "string",
  "date": "Date"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "username": "string",
    "role": "string",
    "date": "Date"
  }
}
```

## Login

Request :

- Method : POST
- Endpoint : `/api/users/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "username": "string",
  "password": "hash(string)",
  "email": "string",
  "role": "string",
  "date": "Date"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "access_token": "string"
  }
}
```

## Get User by Id

Request :

- Method : GET
- Endpoint : `/api/users/{id_user}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "username": "string",
    "password": "hash(string)",
    "email": "string",
    "role": "string",
    "date": "Date"
  }
}
```

## Update User

Request :

- Method : PUT
- Endpoint : `/api/users/{id_user}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "password": "hash(string)",
  "email": "string",
  "role": "string",
  "date": "Date"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "username": "string",
    "role": "string",
    "date": "Date"
  }
}
```

## Get Profile

Request :

- Method : GET
- Endpoint : `/api/users/profile`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "username": "string",
    "role": "string",
    "date": "Date"
  }
}
```

## Delete User

Request :

- Method : DELETE
- Endpoint : `/api/users/{id_user}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

# BOOK

## Create Product

Request :

- Method : POST
- Endpoint : `/api/books`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "name": "string",
  "author": "string",
  "rating": "long",
  "reviews": "integer",
  "year": "integer",
  "price": "long",
  "genre": "string",
  "quantity": "integer",
  "url": "string",
  "deskripsi": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "author": "string",
    "rating": "long",
    "reviews": "integer",
    "year": "integer",
    "price": "long",
    "genre": "string",
    "quantity": "integer",
    "url": "string",
    "deskripsi": "string"
  }
}
```

## Get Product

Request :

- Method : GET
- Endpoint : `/api/books/{id_book}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "author": "string",
    "rating": "long",
    "reviews": "integer",
    "year": "integer",
    "price": "long",
    "genre": "string",
    "quantity": "integer",
    "url": "string",
    "deskripsi": "string"
  }
}
```

## Update Product

Request :

- Method : PUT
- Endpoint : `/api/products/{id_product}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "author": "string",
  "rating": "long",
  "reviews": "integer",
  "year": "integer",
  "price": "long",
  "genre": "string",
  "quantity": "integer",
  "url": "string",
  "deskripsi": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "author": "string",
    "rating": "long",
    "reviews": "integer",
    "year": "integer",
    "price": "long",
    "genre": "string",
    "quantity": "integer",
    "url": "string",
    "deskripsi": "string"
  }
}
```

## List Product

Request :

- Method : GET
- Endpoint : `/api/books`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "name": "string",
      "author": "string",
      "rating": "long",
      "reviews": "integer",
      "year": "integer",
      "price": "long",
      "genre": "string",
      "quantity": "integer",
      "url": "string",
      "deskripsi": "string"
    },
    {
      "id": "string, unique",
      "name": "string",
      "author": "string",
      "rating": "long",
      "reviews": "integer",
      "year": "integer",
      "price": "long",
      "genre": "string",
      "quantity": "integer",
      "url": "string",
      "deskripsi": "string"
    }
  ]
}
```

## Delete Product

Request :

- Method : DELETE
- Endpoint : `/api/products/{id_book}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

# Order

## Create Order

Request :

- Method : POST
- Endpoint : `/api/orders`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "total": "double",
  "user_id": "ObjectID",
  "items": [
    {
      "product_id": "ObjectID",
      "name": "string",
      "description": "string",
      "price": "double"
    }
  ]
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "total": "double",
    "user_id": "ObjectID",
    "items": [
      {
        "product_id": "ObjectID",
        "name": "string",
        "description": "string",
        "price": "double"
      }
    ]
  }
}
```

## Get Order from user

Request :

- Method : GET
- Endpoint : `/api/orders/{id_user}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "total": "double",
    "user_id": "ObjectID",
    "items": [
      {
        "product_id": "ObjectID",
        "name": "string",
        "description": "string",
        "price": "double"
      }
    ]
  }
}
```

## Update orders from a user

Request :

- Method : PUT
- Endpoint : `/api/orders/{id_user}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "total": "double",
  "user_id": "ObjectID",
  "items": [
    {
      "product_id": "ObjectID",
      "name": "string",
      "description": "string",
      "price": "double"
    }
  ]
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "total": "double",
    "user_id": "ObjectID",
    "items": [
      {
        "product_id": "ObjectID",
        "name": "string",
        "description": "string",
        "price": "double"
      }
    ]
  }
}
```

## Delete Orders

Request :

- Method : DELETE
- Endpoint : `/api/orders/{order_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```
