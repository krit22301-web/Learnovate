<!-- Auto-generated README using AI RAG -->
<!-- Generated on: 2025-07-29T17:52:36.467Z -->

# Learnovate: An Online Learning Platform

## Description

Learnovate is a web application providing online courses.  The project consists of a frontend built with React, Tailwind CSS, and React Router, and a backend built with Node.js, Express.js, and MongoDB. The frontend offers course browsing, user authentication, and course details. The backend handles user registration, login, authentication verification, and logout functionalities.

## Features

* **User Authentication:** Secure user registration and login using bcrypt for password hashing and JWT for authentication.
* **Course Catalog:** Displays a list of courses with details like title, instructor, price, rating, and difficulty level.  Includes search and filtering capabilities.
* **Course Details:** Provides detailed information about individual courses, including a description, modules, and video lectures.
* **Responsive Design:** Adapts to different screen sizes for optimal user experience.
* **Admin Panel (Assumed):**  While not explicitly shown, the codebase suggests the potential for an admin panel to manage courses and users.

## Technology Stack

**Frontend:**

* React 18.3.1
* React Router DOM 7.0.2
* Tailwind CSS 3.4.15
* Lucide React (for icons)
* Framer Motion (for animations)
* React Player (for video playback)
* Swiper (for carousel)

**Backend:**

* Node.js
* Express.js 5.1.0
* MongoDB (via Mongoose 8.15.1)
* bcrypt 6.0.0 (for password hashing)
* jsonwebtoken 9.0.2 (for JWT authentication)
* express-validator 7.2.1 (for input validation)
* cookie-parser 1.4.7 (for managing cookies)
* cors 2.8.5 (for handling CORS)
* dotenv 16.5.0 (for environment variables)
* EJS (for templating - likely unused based on provided code)

**Development Tools:**

* Vite 5.4.10
* ESLint 9.13.0 with plugins for React, React Hooks, and React Refresh
* PostCSS 8.4.49 with Tailwind CSS and Autoprefixer

## System Workflow

The application follows a client-server architecture.

**1. Frontend (Learnovate-app):**

* The main entry point is `src/main.jsx`, which renders the `src/App.jsx` component.
* `src/App.jsx` uses React Router to manage navigation between different components (Home, Courses, Instructors, About, Login, Signup, CourseDetails).
* Components like `src/Components/courses.jsx` fetch and display course data (currently hardcoded, but presumably would fetch from the backend in a production environment).
* `src/Components/header.jsx` handles user authentication.  It verifies the user's authentication status by making a GET request to `/user/verify` on the backend.  Upon successful verification, it displays the username and a logout button.  If not logged in, it displays login and signup links.
* `src/Components/login.jsx` and `src/Components/signup.jsx` handle user login and registration, respectively, by sending POST requests to the backend's `/user/login` and `/user/register` endpoints.

**2. Backend (backend):**

* The main entry point is `backend/app.js`.  It initializes Express, connects to the MongoDB database using `backend/config/db.js`, and sets up middleware for JSON parsing, URL encoding, and CORS.
* `backend/routes/user.routes.js` defines the API endpoints for user authentication:
    * `/user/register`: Registers a new user.  Uses express-validator for input validation and bcrypt for password hashing.
    * `/user/login`: Logs in an existing user.  Uses express-validator for validation, bcrypt for password comparison, and jsonwebtoken to generate a JWT.  Sets a cookie containing the JWT.
    * `/user/verify`: Verifies the user's authentication status by checking the JWT in the cookie.
    * `/user/logout`: Clears the authentication cookie, logging the user out.
* The `backend/models/user.model.js` file defines the Mongoose schema for the user collection in MongoDB.

**Data Flow:**

1. User interacts with the frontend.
2. Frontend makes requests (GET for course data, POST for login/registration) to the backend.
3. Backend validates input, interacts with the database (MongoDB), and returns JSON responses.
4. Frontend updates the UI based on the backend's responses.

**Diagram (Textual):**

```
[User] --> [Frontend (React)] --> [Backend (Node.js, Express.js)] --> [MongoDB]
                                      ^                                         |
                                      |                                         |
                                      +------------------------------------------+
```

## Installation

**Backend:**

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the backend directory: `cd Learnovate - web/backend`
3. Install dependencies: `npm install`
4. Create a `.env` file in the backend directory and set the `MONGO_URI` and `JWT_SECRET` environment variables:

```
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
PORT=5000  //Optional, defaults to 5000
```

5. Start the server: `npm start`

**Frontend:**

1. Navigate to the frontend directory: `cd Learnovate - web/Learnovate-app`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Usage

The frontend should be accessible at `http://localhost:5173` (or the port specified by Vite).  The backend runs on `http://localhost:5000` (or the port specified in your `.env` file).  Ensure both are running before using the application.

## Project Structure

```
Learnovate - web/
├── backend/             // Backend code
│   ├── app.js           // Main backend file
│   ├── routes/          // API routes
│   │   └── user.routes.js // User authentication routes
│   ├── models/          // Mongoose models
│   │   └── user.model.js // User schema
│   ├── config/          // Database configuration
│   │   └── db.js       // Database connection
│   └── package.json     // Backend dependencies
├── Learnovate-app/      // Frontend code (React app)
│   ├── src/             // Source code
│   │   ├── App.jsx      // Main React app component
│   │   ├── Components/  // React components
│   │   │   ├── ...      // Various components (header, courses, etc.)
│   │   └── ...          // Other frontend files
│   ├── public/          // Static assets
│   ├── vite.config.js   // Vite configuration
│   ├── tailwind.config.js // Tailwind CSS configuration
│   ├── postcss.config.js // PostCSS configuration
│   └── package.json     // Frontend dependencies
└── ...
```

## API Documentation

**Endpoints:**

* `/user/register` (POST): User registration.  Requires `email`, `username`, and `password` in the request body.
* `/user/login` (POST): User login. Requires `username` and `password` in the request body. Returns a JWT in a cookie upon successful login.
* `/user/verify` (GET):  Authentication verification.  Checks for a valid JWT in the cookie.
* `/user/logout` (POST): User logout. Clears the authentication cookie.

## Configuration

* **Tailwind CSS Configuration:** The styling is configured in `tailwind.config.js`, including custom colors and animations.
* **Environment Variables:**  None are used in the provided code.  Environment variables would be beneficial for managing API keys and other sensitive information in a production environment.

## Further Development

This project is a basic front-end implementation.  To make it a fully functional online learning platform, the following improvements are recommended:

* **Backend Integration:** Implement a backend API to manage courses, users, and enrollments.
* **Database:** Integrate a database (e.g., PostgreSQL, MongoDB) to store course and user data.
* **User Authentication:** Add user authentication and authorization.
* **Payment Gateway Integration:** Integrate a payment gateway for handling course purchases.
* **Testing:** Implement comprehensive unit and integration tests.
* **Deployment:** Deploy the application to a hosting platform (e.g., Netlify, Vercel).