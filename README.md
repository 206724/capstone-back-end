
```markdown
# Back-End for Airbnb Clone

## Project Description

This is the back-end of an Airbnb clone application built with Node.js, Express, and MongoDB. The application provides RESTful APIs for user authentication, place management, and booking management.

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

- Node.js
- npm or yarn
- MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone <https://github.com/206724/capstone-back-end.git>

## Installation

1. Clone the repository:

```sh
git clone <https://github.com/206724/capstone-back-end.git>
cd <api>
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

## Project Structure

api/
|-- models/
|   |-- Booking.js
|   |-- Place.js
|   |-- User.js
|-- index.js


## API Endpoints

### Test Endpoint

- **GET /test**

  Returns a test message.
  
{
  "message": "test ok"
}



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





