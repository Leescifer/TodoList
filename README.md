# TodoList Using MERN Stack

### Backend Only Available

This repository contains only the backend for a Todo List application built using the MERN (MongoDB, Express.js, React, Node.js) stack.  
Frontend is coming up next for upload.

## Setting Up Your Own Server and Database

Ensure you have [Node.js](https://nodejs.org/) installed on your system before proceeding.

### Clone the Repository
```sh
git clone https://github.com/Leescifer/TodoList.git
cd TodoList
```

### Install Dependencies
```sh
npm install
```

## Create Your Own Database
To create your own database, visit [MongoDB](https://www.mongodb.com/) and set up a new database. Update your `.env` file with the appropriate MongoDB connection string.

### Set Up Environment Variables
Create a `.env` file in the root directory and configure the following variables:
```env
PORT=your_port_number
NODE_ENV=development
URI=your_mongodb_connection_string
```

### Start the Server
#### On project root
```sh
npm run dev 
```
The backend will be running on `http://localhost:<PORT>`.

## API Endpoints
| Method | Endpoint | Description |
|--------|------------|-------------|
| GET | /api/todos | Fetch all todos |
| POST | /api/todos | Create a new todo |
| PATCH | /api/todos/:id | Update a todo |
| DELETE | /api/todos/:id | Delete a todo |

## Tools Used
- **Postman**: For building, testing, documenting, and sharing APIs.

## Contributing
Feel free to fork this repository and contribute by submitting pull requests.

