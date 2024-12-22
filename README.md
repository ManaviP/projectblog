# Blog Project

This is a simple blog application that allows users to create, read, update, and delete blog posts. The application features a backend built with Express.js, MongoDB, and a frontend using React.js. The backend provides APIs for managing blog posts, including support for generating summaries for each post using `node-summariser`.

## Features
- **Create Posts**: Users can create new blog posts with a title, content, and a generated summary.
- **View Posts**: Users can view a list of all blog posts along with their title, content, and summary.
- **Update Posts**: Users can update existing blog posts.
- **Delete Posts**: Users can delete any blog post they no longer want to keep.
- **Summarize Content**: Posts are automatically summarized using `node-summariser`.

## Technologies Used

### Backend:
- Node.js with Express.js
- MongoDB with Mongoose
- CORS for handling cross-origin requests

### Frontend:
- React.js
- Axios for API calls

## Installation

### Backend Setup
- cd backend
- npm install
- MONGO_URI=<your_mongodb_connection_string>
- node app.js

### Frontend
- cd frontend
- npm install
- npm start

The backend will be running on http://localhost:5000.
The frontend will be running on http://localhost:3000
