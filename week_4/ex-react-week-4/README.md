# User Management System

A React application for managing users with authentication, CRUD operations, and data import/export features.

## Features

### Authentication
- Login/Logout functionality
- Protected routes (require login to access User Management)
- Session management with localStorage

### User Management
- View list of users with pagination
- View user details in modal
- Add new user
- Edit user information
- Delete user with confirmation
- Sort users by ID or First Name
- Search users by first name

### Data Import/Export
- Export user data to CSV file
- Import users from CSV file

### UI/UX
- Responsive design with Bootstrap
- Toast notifications for user feedback
- Clean and modern interface

## API

This project uses [Reqres API](https://reqres.in/) for demonstration:
- GET /users - Fetch users with pagination
- POST /users - Create new user
- PUT /users/:id - Update user
- DELETE /users/:id - Delete user
- POST /login - User authentication

## Test Login

Use these credentials to test login:
- Email: `eve.holt@reqres.in`
- Password: any password

## Author

Van Dinh - EcomElite Intern Week 4