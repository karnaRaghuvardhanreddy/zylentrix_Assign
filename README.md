# User Management API

## Setup Instructions

To get started with the User Management API, follow these steps:

1. **Clone the repository** to your local machine.
2. **Install dependencies** by running:
   ```sh
   npm install
   ```
3. **Create a `.env` file** in the root directory and add the following environment variables:
   ```sh
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```
4. **Create a `.gitignore` file** and add the following to exclude unnecessary files:
   ```
   node_modules/
   .env
   ```
5. **Start the server** using:
   ```sh
   npm start
   ```

## API Endpoints

### Authentication
- **Register a User**  
  `POST /api/auth/register`  
  Allows users to create an account.

- **Login**  
  `POST /api/auth/login`  
  Authenticates a user and returns a JWT token.

### User Management (Requires JWT Token)
- **Get All Users**  
  `GET /api/users`  
  Retrieves a list of all users.

- **Get a User by ID**  
  `GET /api/users/:id`  
  Fetches a specific user by their ID.

- **Update a User**  
  `PUT /api/users/:id`  
  Updates user details.

- **Delete a User**  
  `DELETE /api/users/:id`  
  Removes a user from the database.

## Notes
- Ensure that your `.env` file contains the correct MongoDB connection string and JWT secret.
- All user management routes require authentication using a valid JWT token.
- Use Postman or a similar API client to test the endpoints.

Happy coding! 🚀
