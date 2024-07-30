# Introduction
This repository contains automated test cases for the E-Commerce, Bank Project, Hotel Reservation, Petstore API, SwagLabs, and Trendyol websites using [Cypress](https://www.cypress.io "Cypress"). These tests are designed to ensure the robustness and reliability of the various functionalities, including login, registration, CRUD operations, and cart management.

## Projects Overview

### Bank Project
The Bank Project simulates an online banking application with functionalities including user registration, login, and account management. It includes CRUD operations for managing user accounts and transactions.

### E-Commerce
The E-Commerce project tests the functionalities of an online shopping platform. It includes user registration, login, product browsing, adding products to the cart, and checkout processes.

### Hotel Reservation
The Hotel Reservation project focuses on booking functionalities for hotels. Users can search for hotels, view details, make reservations, and manage their bookings.

### Petstore API
The Petstore API project includes testing CRUD operations for managing pet information. It tests API endpoints for creating, reading, updating, and deleting pet data, as well as uploading images for pets.

### SwagLabs
The SwagLabs project tests an online store platform's functionalities. It includes user registration, login, browsing products, adding to the cart, and performing checkout.

### Trendyol
The Trendyol project focuses on an online marketplace's functionalities. It tests user registration, login, product browsing, adding to the cart, and checkout processes.

## Test Cases

### Successful Register
- **Objective:** To verify that a user can successfully register.
- **Test Steps:**
  1. Open the website.
  2. Click SignUp.
  3. Enter a valid username (e.g., 'batuhangulec7').
  4. Enter the corresponding valid password (e.g., 'batuhangulec777').
  5. Click the register button.
- **Expected Result:** The user should be successfully registered and redirected to the home page.

### Additional Test Cases
Each project contains a variety of test cases to ensure the reliability of the functionalities. Examples include:
- Login functionality
- CRUD operations for products and user data
- Adding products to the basket
- Performing checkout

## Getting Started

### Prerequisites
- Node.js
- Cypress

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/batuhanngulec/CypressTestAutomation.git
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Tests
To run the Cypress tests, use the following command:
```bash
npx cypress open
 ```
