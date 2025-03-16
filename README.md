# CMPSC421 Lab 2 - RESTful API

RESTful API built with Node.js, Express.js, and MongoDB that manages customers, orders, and payments.

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cmpsc421-lab2
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

   - Update the environment variables in `.env` with your configuration

## API Endpoints

### Customers
- `GET /api/customers` - Get all customers
- `GET /api/customers/:id` - Get customer by ID
- `POST /api/customers` - Create new customer
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order
- `DELETE /api/orders/:id` - Delete order

### Payments
- `GET /api/payments` - Get all payments
- `GET /api/payments/:id` - Get payment by ID
- `POST /api/payments` - Create new payment
- `PUT /api/payments/:id` - Update payment
- `DELETE /api/payments/:id` - Delete payment

## Running the Application

Start the server:
```bash
npm start
```

The API is available at `http://localhost:3000`.

## API Documentation

API documentation is available at `/api-docs`