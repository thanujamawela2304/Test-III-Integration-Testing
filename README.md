# Test III – Integration Testing

## About the Project

This project is part of Test III – Integration Testing. For this task, I developed a simple Hex-to-RGB Converter API using Node.js and Express.

The application takes a six-digit hexadecimal colour code and converts it into its RGB values. For example, the colour code 3A7BD5 is converted into red (58), green (123), and blue (213).

The main goal of this exercise was to practise testing how different parts of an application work together. I used a simple JavaScript function and an API endpoint to understand how integration testing helps identify problems in the overall process.

## Technologies Used

- **JavaScript** – Implements the Hex-to-RGB colour conversion logic.
- **Node.js** – Runs the application.
- **Express** – Provides the REST API endpoint.
- **Mocha** – Runs the automated tests.
- **Chai** – Checks whether the actual results match the expected results.
- **Supertest** – Sends HTTP requests to the API during integration testing.

## Project Structure

The project files are organised as follows:

Test-III-Integration-Testing/
├── src/
│   ├── hexToRgb.js
│   └── server.js
├── test/
├── api-test.http
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

The src folder contains the Hex-to-RGB conversion function and the Express application. The test folder contains the unit and integration tests. I also created api-test.http to test the API manually using a REST Client extension in Visual Studio Code.

## Getting Started

### Requirements

Before running the project, make sure Node.js and npm are installed on the computer.

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

I used both unit tests and integration tests in this project.

Unit tests check the conversion function directly, including valid input, a colour code with the # prefix, and invalid input.

Integration tests send HTTP requests to the Express API and check the response status codes and returned data.

To run the complete test suite, use:

```bash
npm test
```

The tests cover successful colour conversion, handling hexadecimal values without the `#` symbol, and rejecting invalid colour values.

## Test Results

All five automated tests passed when I ran npm test. Three tests checked the conversion function, and the other two checked the API endpoint with valid and invalid input.

The results show that the application behaved as expected for the test cases I included. However, additional tests would be needed to check more input conditions.

## Manual API Testing

I created an api-test.http file with example requests for valid and invalid colour codes. I used a compatible REST Client extension in Visual Studio Code to send requests and inspect the API responses. 

This helped me check the endpoint manually in addition to running the automated tests.

## What I Learned

Through this task, I learned how to separate a JavaScript function from an Express API and test each part in a different way. I also gained practical experience in checking HTTP status codes, validating input, and inspecting JSON responses.

I now have a better understanding of why additional test cases are important for improving test coverage.
