# Test III – Integration Testing

## About the Project

This project focuses on integration testing using a simple Hex-to-RGB Converter API built with Node.js and Express.

The application converts a six-digit hexadecimal colour value into its corresponding RGB values. For example, the hexadecimal colour `3A7BD5` is converted into red (58), green (123), and blue (213).

The main purpose of this exercise is to understand how a JavaScript function works together with an API endpoint and how integration tests can be used to check that the complete flow works as expected.

## Technologies Used

- **JavaScript** – Implements the colour conversion logic.
- **Node.js** – Runs the application.
- **Express** – Provides the REST API endpoint.
- **Mocha** – Runs the automated tests.
- **Chai** – Checks whether the actual results match the expected results.
- **Supertest** – Sends HTTP requests to the API during integration testing.

## Getting Started

### Requirements

Make sure Node.js and npm are installed on your computer.

### Installation

Clone the repository and open the project folder in a terminal. Install the required dependencies:

```bash
npm install
```

### Run the Application

Start the development server:

```bash
npm run dev
```

The API will be available at:

`http://localhost:3000`

## Using the API

### Convert a Hexadecimal Colour to RGB

The API accepts a hexadecimal colour value through the `hex` query parameter.

**Endpoint:** `GET /hex-to-rgb`

**Example request:**

```http
GET http://localhost:3000/hex-to-rgb?hex=3A7BD5
```

**Expected response:**

```json
{
  "r": 58,
  "g": 123,
  "b": 213
}
```

The response contains the three RGB components as numeric values.

### Test an Invalid Colour Value

The API also checks whether the supplied hexadecimal colour value is valid.

**Example request:**

```http
GET http://localhost:3000/hex-to-rgb?hex=XYZ123
```

**Expected response:**

HTTP status: `400 Bad Request`

```json
{
  "error": "Invalid hex color"
}
```

This example demonstrates how the API responds when an invalid colour value is provided.

## Testing

This project includes both unit tests and integration tests.

- **Unit tests** check the Hex-to-RGB conversion function independently.
- **Integration tests** send HTTP requests to the API endpoint and check the returned status codes and response data.

To run the complete test suite, use:

```bash
npm test
```

The tests cover successful colour conversion, handling hexadecimal values without the `#` symbol, and rejecting invalid colour values.

## What I Learned

Through this exercise, I practised writing automated tests and learned how unit testing differs from integration testing. I also gained experience in checking API responses, validating input, and using Mocha, Chai, and Supertest together in a Node.js application.
