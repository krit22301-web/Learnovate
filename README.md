<!-- Auto-generated README using AI RAG -->
<!-- Generated on: 2025-08-24T21:20:04.848Z -->

# Learnovate - Web Application

## Description

Learnovate is a web application providing online course content.  Users can browse courses, enroll (free or paid), track their progress, and watch video lectures.  The application integrates with a backend service (presumably for user authentication, enrollment, and progress tracking). This README focuses on the frontend React application.

## Features

* **Course Browsing:** Displays course details including title, instructor, description, price, rating, and difficulty.
* **Course Enrollment:** Allows users to enroll in courses, handling both free and paid courses.  Enrollment status is managed via a backend API.
* **Video Playback:** Integrates with `react-player` to display video lectures.  Progress tracking is implemented for each video.
* **Progress Tracking:** Tracks user progress through modules and the overall course. Progress is saved to a backend API.
* **User Authentication:** (Implied)  The application interacts with a backend for user login and enrollment, indicating user authentication is handled externally.
* **Responsive Design:** Uses Tailwind CSS for styling and responsive layout.

## Technology Stack

* **Frontend:** React, React Router DOM, React Player, Lucide-React, Framer Motion, Swiper
* **Styling:** Tailwind CSS, PostCSS, Autoprefixer
* **State Management:** React's useState and useEffect hooks (local state)
* **Backend:**  A separate backend service (URL: `https://backend-test-k5py.onrender.com`) is used for user authentication, enrollment, and progress tracking.  (Specifics not included in provided code)
* **Build Tool:** Vite

## System Workflow

The application's workflow can be summarized as follows:

1. **Initialization:** The `App.jsx` component renders the main application structure, including routing.  `CourseDetails.jsx` is rendered when a course ID is provided in the URL.

2. **Data Fetching:** `CourseDetails.jsx` fetches course data from a local `courses` array (for demonstration purposes; a backend API call would likely be used in a production environment).  It also fetches user enrollment status and progress from the backend API (`/user/course-status/:courseId`).

3. **UI Rendering:** The component renders the course details, including a progress bar, enrollment button, and video player.  The UI dynamically updates based on the fetched data and user interactions.

4. **Video Playback and Progress Tracking:** The `ReactPlayer` component handles video playback. The `handleVideoProgress` function tracks playback progress. When progress exceeds 80%, the module is marked as complete.

5. **Progress Update:**  `handleVideoProgress` updates the local `watchProgress` state and calls `updateProgressInDatabase` to send the updated progress to the backend API (`/user/update-progress`).

6. **Enrollment:** The `handleEnrollment` function sends an enrollment request to the backend API (`/user/enroll-course`). The response determines whether enrollment was successful, and updates the UI accordingly.

7. **Error Handling:**  The application includes error handling for API calls and other potential issues.

**Simplified Workflow Diagram:**

```
[User Interaction] --> [CourseDetails.jsx] --> [Fetch Course Data (local/API)] --> [Fetch Enrollment Status (API)]
                                                                     |
                                                                     V
                                                [Render UI] --> [ReactPlayer (Video Playback)] --> [handleVideoProgress] --> [Update Progress (API)]
                                                                     ^
                                                                     |
                                                                     |
                                                                     [handleEnrollment] --> [Enroll Course (API)] --> [Update UI]
```

## Installation

1. **Clone the repository:** `git clone <repository_url>`
2. **Navigate to the project directory:** `cd learnovate-app`
3. **Install dependencies:** `npm install` or `yarn install`
4. **Start the development server:** `npm run dev` or `yarn dev`

## Usage

Run the application using the instructions in the Installation section.  Navigate to `/courses` to view the available courses. Clicking on a course will take you to the course details page (`/course/:id`).

## Project Structure

```
learnovate-app/
├── public/
│   └── icon.png
├── src/
│   ├── App.jsx
│   ├── Components/
│   │   ├── ... (various React components)
│   │   └── courseDetails.jsx
│   ├── assets/
│   │   └── ... (images)
│   └── data/
│       └── coursedata.js  // Contains course data (replace with API call in production)
│       └── instructorsData.jsx // Contains instructors data
├── package.json
├── vite.config.js
└── ...
```

## API Documentation

The frontend interacts with a backend API at `https://backend-test-k5py.onrender.com`.  The endpoints used are:

* `/user/course-status/:courseId`: GET request to retrieve enrollment status and progress for a given course ID.
* `/user/enroll-course`: POST request to enroll in a course.
* `/user/update-progress`: POST request to update course progress.

**Note:**  Detailed API documentation for the backend is not provided.

## Configuration

No explicit configuration files are present in the provided code.  The backend API URL is hardcoded in `CourseDetails.jsx`.  In a production environment, this should be managed through environment variables.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.  Ensure your code follows the existing coding style and includes relevant tests.