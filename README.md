Todo List App
A full-stack todo list application built with the MERN stack (MongoDB, Express, React, Node.js) that helps you manage your tasks efficiently.
Features

Create, read, update, and delete todos
Mark tasks as complete/incomplete
Persistent storage with MongoDB
Responsive user interface


Tech Stack
Frontend:

React
Axios for API calls

Backend:

Node.js
Express.js
MongoDB
Mongoose

Development Tools:

Nodemon for auto-reloading
Yarn package manager

Prerequisites
Before running this application, make sure you have the following installed:

Node.js (v14 or higher)
Yarn
MongoDB (local installation or MongoDB Atlas account)

Installation

Clone the repository:

git clone https://github.com/ayirezang/todolist.git
cd todolist-app

Install dependencies for both client and server:

bash# Install server dependencies
cd backend
yarn install

# Install client dependencies
cd ../frontend
yarn install
```

3. Create a `.env` file in the server directory and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/todolist
PORT=5000
Running the Application
Start the development server with hot-reloading:
bashyarn dev
```

This command will start both the frontend and backend servers concurrently using nodemon for automatic restarts on file changes.

- Frontend will run on: `http://localhost:3000`
- Backend will run on: `http://localhost:5000`

## Project Structure
```
todolist-app/
├── frontend/              # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├──backend/              # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
└── README.md
API Endpoints

GET /api/todos - Get all todos
POST /api/todos - Create a new todo
PUT /api/todos/:id - Update a todo
DELETE /api/todos/:id - Delete a todo

Contributing
Feel free to submit issues and pull requests.
