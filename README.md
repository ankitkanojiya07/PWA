# Real-Time Collaborative Text Editor (PWA)

This web application is a real-time collaborative text editor that allows multiple users to edit the same document simultaneously. It also works offline and can be installed on the user's device.

## Features

1. *Real-Time Collaboration:*
   - Uses WebSockets for real-time communication.
   - Sync changes between multiple users.
   - Display a list of currently active users.
   - Handle conflicts and merge changes gracefully.

2. *Progressive Web App (PWA):*
   - Implement a service worker to cache assets and handle offline functionality.
   - Add a manifest file to define the app's metadata.
   - Ensure the app can be installed on the user's device.
   - Provide offline fallback content.

## Installation

### Backend Setup

1. Clone the repository:
    bash
   https://github.com/ankitkanojiya07/Pwa.git
    

2. Install backend dependencies:
    bash
    npm install
    

3. Start the backend server:
    bash
    node server.js
    

### Frontend Setup

1. Navigate to the client directory:
    bash
    cd ../client
    

2. Install frontend dependencies:
    bash
    npm install
    

3. Start the React development server:
    bash
    npm start
    

## Usage

1. Open your web browser and navigate to http://localhost:3000.
2. The application will automatically connect to the backend server at http://localhost:5000.
3. Start editing and collaborating on the document in real-time.
