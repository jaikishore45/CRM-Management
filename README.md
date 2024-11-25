User Authentication and Dashboard Management
Purpose:
This project aims to demonstrate a simple user authentication and management system using React. The system allows users to log in with different roles (Admin, User, Vendor), where each role is associated with a specific dashboard. The primary goal of this project is to showcase how role-based authentication and routing work in React. It can be expanded with additional functionalities like user registration, password reset, or integration with a backend server for real-world applications.

Use Cases:
User Login:

Users can log in using predefined credentials. There are three sets of credentials, each corresponding to a specific role:
Admin: admin@example.com, admin123
User: user@example.com, user123
Vendor (Creator): creator@example.com, creator123
Upon successful login, the user's role is determined, and they are redirected to their corresponding dashboard page:
Admin will be redirected to /dashboard
User will be redirected to /user
Vendor will be redirected to /creator
Role-based Routing:

Once logged in, the user is redirected to their appropriate dashboard based on their role:
Admin: Accesses an admin panel with full privileges.
User: Accesses a user-specific dashboard, where they can view relevant data or interact with the platform.
Vendor (Creator): Accesses a creator-specific dashboard, where they can manage and create content or tasks.
Authentication Context:

The app uses React's Context API to manage the authentication state globally. Once a user logs in, the authentication data is stored in the local storage for persistence. This allows the user to remain logged in across different pages or when the app is refreshed.
Responsive Design:

The application is fully responsive, ensuring that users can navigate and interact with the platform seamlessly on mobile, tablet, and desktop devices.
Mock Authentication:

The authentication logic is currently mock-based, with predefined users and their roles. In a real-world scenario, this could be replaced with an API to authenticate against a backend service.
Key Features:
Login Page: Users can log in with email and password. Error messages are shown for invalid credentials.
Role-based Redirection: After logging in, users are redirected to the appropriate page based on their role.
User Dashboard: Displays a dashboard for different types of users.
Sidebar Navigation: Provides easy navigation to different areas of the app (such as tickets, posts, and settings).
Responsive Layout: Uses TailwindCSS for a clean, responsive, and mobile-friendly layout.
State Management: Uses React's Context API to manage user authentication and application state globally.
How to Use:
Clone or download the repository to your local machine.

Install dependencies by running:

npm install

Start the application:

npm start

The app will run on http://localhost:3000.

Use the following credentials to log in:

Admin: admin@example.com, admin123
User: user@example.com, user123
Vendor (Creator): creator@example.com, creator123
Folder Structure:
src/components: Contains the UI components like Sidebar, Shimmer, and login form.
src/context: Contains the AuthContext to manage user authentication state globally.
src/pages: Contains the pages for Admin, User, and Vendor dashboards.
src/utils: Contains utility functions like the Reducer and action types for managing user-related actions.
Future Improvements:
Integrate with a real backend for authenticating users and managing roles.
Add registration and password reset functionality.
Implement proper error handling and validation for inputs.
Add additional features like notification systems, content creation, and role management.
Conclusion:
This project is designed as a foundation for building role-based user authentication systems in React. It showcases how to manage user roles, securely store authentication data, and route users based on their roles.