# Employee-Authorization-and-Validation

# Employee Authorization and Validation Backend

This backend project is built using Node.js, Express, and MongoDB. It includes employee authorization and validation functionalities using JWT tokens. The project is structured with routes, controllers, models, and environment variables.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/employee-auth.git
    cd employee-auth
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

## Configuration
1. Create a `.env` file in the root directory and add the following environment variables:
    ```sh
    PORT=3000
    MONGO_URI=<your-mongodb-atlas-uri>
    JWT_SECRET_KEY=<your-jwt-secret-key>
    ```
## Usage
1. Start the server:
    ```sh
    npm start
    ```
2. The server will run on the port specified in the `.env` file.

## API Endpoints
### Authentication
- **POST** `/login`: Authenticates an employee and returns a JWT token.
    ```json
    Request Body:
    {
        "empid": "12345",
        "password": "password123"
    }
    Response:
    {
        "token": "your-jwt-token"
    }
    ```
### Employee Management
- **PUT** `/updatePassword`: Updates the password for a specific employee.
    ```json
    Request Header:
    {
        "Authorization": "Bearer your-jwt-token"
    }
    Request Body:
    {
        "name": "John Doe",
        "password": "newpassword123"
    }
    Response:
    {
        "message": "Password for user John Doe updated successfully."
    }
    ```
## Project Structure
## Dependencies
- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
- `jsonwebtoken`: JSON Web Token implementation for Node.js.
- `dotenv`: Module to load environment variables from a `.env` file into `process.env`.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
