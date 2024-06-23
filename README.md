# Dev Buddy

Dev Buddy is a web application that allows users to search for GitHub profiles based on location. Built with React.js and Node.js, it fetches user details including username, profile URL, and follower count using the GitHub API.

## Tech Stack

### Frontend

- React
- Axios (HTTP Requests)
- Tailwind CSS (Styling)
- Framer Motion

### Backend

- Node.js
- Express.js
- Axios (HTTP Requests)
- Environment Management: dotenv

## Screenshots

## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Clone the Repository

```bash
git clone https://github.com/isayanpal/devBuddy.git
cd devBuddy
```

### Server Setup

1. Navigate to the `api` directory:

   ```bash
   cd api
   ```

2. Install api dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `api` directory and add your environment variables:

   ```plaintext
   GITHUB_TOKEN = your github access token
    PORT = 5000
   ```

4. Start the api:
   ```bash
   npm run dev
   ```

### Client Setup

1. Open a new terminal window and navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install client dependencies:

   ```bash
   npm install
   ```

3. Start the client:
   ```bash
   npm run dev
   ```

### Running the Application

The client will be running on `http://localhost:5173` and the server on `http://localhost:5000`.

## Contributing

If you want to contribute to NewsTech, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature-branch
   ```

5. Open a pull request.

## Happy Coding ❤️
