# Rootstock InterAct

A developer-focused dApp to interact with any verified Rootstock smart contract. Load contracts, execute functions, and manage transactions with an intuitive GUI. Includes a backend service for transaction decoding and management.

## Features

- **Contract Loader**: Load verified contracts from Rootstock explorer by address.
- **Function List**: Automatically parses ABI and displays all available read and write functions.
- **Response Panel**: View execution results, transaction hashes, and error messages.
- **Workspace**: Save your frequently used contracts and function calls.
- **Web3 Integration**: Seamlessly connect with Rootstock-supported wallets.
- **Transaction History**: Backend support for tracking and decoding transactions.

## Technologies Used

### Frontend
- **Framework**: Vite, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn-ui, Lucide React
- **Web3**: Wagmi, Viem, TanStack Query

### Backend
- **Runtime**: Node.js, Express
- **Database**: MongoDB
- **Blockchain**: Ethers.js

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (ensure it is running locally or provide a connection string)

### Backend Setup

1. **Navigate to the backend directory**
   ```sh
   cd backend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure Environment**
   Copy the example environment file:
   ```sh
   cp .env.example .env
   ```
   Update `.env` with your specific configurations (Database URI, RPC URLs, etc.) if needed.

4. **Start the backend server**
   ```sh
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the frontend directory**
   ```sh
   cd frontend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

## Deployment

### Frontend
Build the project for production:
```sh
cd frontend
npm run build
```
The output will be in the `frontend/dist` directory.

### Backend
Build the backend:
```sh
cd backend
npm run build
```
Start the production server:
```sh
npm start
```
