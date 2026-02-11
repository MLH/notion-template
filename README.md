# Notion Express & React Boilerplate

This project consists of an Express backend serving a simple API and a React frontend to consume it, demonstrating a basic full-stack setup.

## Prerequisites

- Node.js (which includes npm)

## Getting Started

### 1. Backend Setup (Root Directory)

The backend is a simple Express server configured to run on port 3000 and expose a message via a REST endpoint.

**Dependencies Installation:**
From the root directory of the project:

\`\`\`bash
npm install
\`\`\`

**Run the Server:**
The server will start on \`http://localhost:3000\`.

\`\`\`bash
node server.js
\`\`\`

### 2. Frontend Setup (Client Directory)

The frontend is a React application built with Vite, located in the \`client/\` directory. It fetches and displays the message from the Express backend.

**Dependencies Installation:**
Navigate to the client directory and install dependencies:

\`\`\`bash
cd client
npm install
\`\`\`

**Run the Client:**
The client will start a development server, typically on port 5173.

\`\`\`bash
npm run dev
\`\`\`

### 3. Verification

Once both the backend (\`node server.js\`) and the frontend (\`npm run dev\` in the \`client\` directory) are running, open your browser to the URL provided by the \`npm run dev\` command (e.g., \`http://localhost:5173\`).

The page should display the message: **"Hello from Notion Express Server!"**
