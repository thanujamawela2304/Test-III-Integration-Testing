# Hex-to-RGB Converter API

## Description

This project is a simple JavaScript library and REST API for converting hexadecimal color values into RGB values. The API is built using Express.

## Requirements

- Node.js
- npm

## Installation

Install the project dependencies:

```bash
npm install
```

## Run the API

```bash
npm run dev
```

The server runs at `http://localhost:3000`.

### Example request

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

## Run the tests

```bash
npm test
```

The test suite includes unit tests for the hex-to-RGB conversion function and integration tests for the API route.

## Technologies

- JavaScript
- Node.js
- Express
- Mocha
- Chai
- Supertest