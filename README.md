# API Spec

## Authentication

All API must use this authentication

Request :

- Header :
  - X-Api-Key : "your secret api key"

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
    "deskripsi": "string",
    "createdAt": "date",
    "updatedAt": "date"
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
    "deskripsi": "string",
    "createdAt": "date",
    "updatedAt": "date"
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
    "deskripsi": "string",
    "createdAt": "date",
    "updatedAt": "date"
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
      "deskripsi": "string",
      "createdAt": "date",
      "updatedAt": "date"
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
      "deskripsi": "string",
      "createdAt": "date",
      "updatedAt": "date"
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
