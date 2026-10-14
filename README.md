# Test III – Integration Testing

## Description

This project demonstrates integration testing of a JavaScript Hex-to-RGB Converter API built with Express. It includes a function that converts hexadecimal color values into RGB values and an API endpoint tested using Mocha, Chai, and Supertest.

## Requirements

- Node.js
- npm

## Installation

Install the project dependencies:

```bash
npm install
```

## Run the API

Start the development server:

```bash
npm run dev
```

The server runs at:

`http://localhost:3000`

## API Usage

### Convert Hexadecimal Color to RGB

**Endpoint:** `GET /hex-to-rgb`

**Query parameter:** `hex` — a six-digit hexadecimal color value.

Example request:

```http
GET http://localhost:3000/hex-to-rgb?hex=3A7BD5
```

Expected response:

```json
{
  "r": 58,
  "g": 123,
  "b": 213
}
```

### Invalid Hexadecimal Color

Example request:

```http
GET http://localhost:3000/hex-to-rgb?hex=XYZ123
```

Expected response: HTTP `400 Bad Request`.

```json
{
  "error": "Invalid hex color"
}
```

## Run the Tests

Run all tests:

```bash
npm test
```

The test suite includes unit tests for the Hex-to-RGB conversion function and integration tests for the API endpoint.

## Technologies

- JavaScript
- Node.js
- Express
- Mocha
- Chai
- Supertest
