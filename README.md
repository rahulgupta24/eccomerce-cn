# Ecommerce API

## Setup

1. Clone this repository.
2. Install Node.js if not already installed.
3. Install MongoDB if not already installed.
4. Run `npm install` to install project dependencies.
5. Create a `.env` file in the project root and add your MongoDB URI as `MONGODB_URI`.
6. Start the server with `npm start`.

## Endpoints

- **Create a Product**: POST `/products/create`
  - Request:
    ```json
    {
      "name": "laptop",
      "quantity": 10
    }
    ```
  - Response:
    ```json
    {
      "product": {
        "name": "laptop",
        "quantity": 10
      }
    }
    ```

- **List Products**: GET `/products`

  - Response:
    ```json
    {
      "products": [
        {
          "id": "1",
          "name": "laptop",
          "quantity": 10
        },
        {
          "id": "2",
          "name": "camera",
          "quantity": 5
        },
        {
          "id": "3",
          "name": "smartwatch",
          "quantity": 8
        }
      ]
    }
    ```

- **Delete Product**: DELETE `/products/:id`

  - Response:
    ```json
    {
      "message": "Product deleted"
    }
    ```

- **Update Product Quantity**: POST `/products/:id/update_quantity/?number=10`

  - Response:
    ```json
    {
      "product": {
        "id": "1",
        "name": "laptop",
        "quantity": 20
      },
      "message": "Updated successfully"
    }
    ```
