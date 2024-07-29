
```markdown
# Booking Platform

This project is a booking platform that allows users to register, login, manage places, and make bookings. It is built using Node.js, Express, MongoDB, and React.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```sh
git clone <repository-url>
cd <repository-directory>
```

2. Install the server dependencies:

```sh
npm install
```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env
MONGO_URL=<mongodb-connection-string>
JWT_SECRET-jwt-secret>
PORT=[<http://localhost:5173>] # default is 4000
```

## Running the Server

Start the server with the following command:

```sh
nodemon index.js
```

The server will start on the port specified in the `.env` file, or default to port 4000 if not specified.

## API Endpoints

### Test Endpoint

- **GET /test**

  Returns a test message.

### User Endpoints

- **POST /register**

  Registers a new user.

  **Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

- **POST /login**

  Logs in a user.

  **Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

- **GET /profile**

  Returns the logged-in user's profile.

- **POST /logout**

  Logs out the user.

### Place Endpoints

- **GET /places**

  Returns all places.

- **GET /places/:id**

  Returns a specific place by ID.

- **GET /user-places**

  Returns places owned by the logged-in user.

- **POST /user-places**

  Adds a new place.

  **Body:**
  ```json
  {
    "title": "string",
    "address": "string",
    "addedPhotos": ["string"],
    "description": "string",
    "price": "number",
    "perks": ["string"],
    "extraInfo": "string",
    "checkIn": "number",
    "checkOut": "number",
    "maxGuests": "number"
  }
  ```

- **PUT /places**

  Updates an existing place.

  **Body:**
  ```json
  {
    "id": "string",
    "title": "string",
    "address": "string",
    "addedPhotos": ["string"],
    "description": "string",
    "price": "number",
    "perks": ["string"],
    "extraInfo": "string",
    "checkIn": "number",
    "checkOut": "number",
    "maxGuests": "number"
  }
  ```

### Booking Endpoints

- **GET /bookings**

  Returns all bookings for the logged-in user.

- **GET /bookings/:id**

  Returns a specific booking by ID.

- **POST /bookings**

  Creates a new booking.

  **Body:**
  ```json
  {
    "placeId": "string",
    "checkIn": "string",
    "checkOut": "string",
    "guests": "number",
    "price": "number"
  }
  ```

### Image Upload Endpoints

- **POST /upload-by-link**

  Uploads an image from a link.

  **Body:**
  ```json
  {
    "link": "string"
  }
  ```

- **POST /upload**

  Uploads images.

## Frontend Setup

1. Navigate to the `frontend` directory:

```sh
cd frontend
```

2. Install the frontend dependencies:

```sh
npm install "tailwindcss","axios",date-fns,"cookie-parser," "cors," "date-fns", "react", "react-dom": "^18.3.1", "react-router-dom"
```

3. Start the frontend development server:

```sh
npm start
```

The frontend will start on the default port 4000.

## Usage

- Register a new user.
- Login with the registered user.
- Add, view, and manage places.
- Make bookings for available places.

## License



