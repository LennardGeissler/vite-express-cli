# 🚀 vite-express-cli

This script provides a command-line utility for quickly scaffolding a full-stack application with a Vite client (React, TypeScript) and an Express server (TypeScript). It generates the necessary folder structure, installs dependencies, and sets up basic configurations.

## 🛠️ Features

- Client Setup:

  - Vite with React and TypeScript template ⚛️💻
  - React with SWC support for faster builds ⚡
  - Pre-configured client-side folder structure 🗂️

- Server Setup:

  - Express server with TypeScript 🖥️🔧
  - TypeScript configuration for the server 📜
  - Pre-configured server-side folder structure 🗂️
  - Includes nodemon for automatic server restarts during development 🔄

- Standard Files:

  - `README.md` 📖
  - `LICENSE` (MIT License) 📝
  - `.gitignore` for ignoring node_modules, build artifacts, and environment files 🚫

## 📂 Project Structure

- **client/**: Contains the client-side code, set up with Vite, React, and TypeScript.
- **server/**: Contains the server-side code, set up with Express and TypeScript.

### 🖥️ Client Folder Structure

```graphql
client/
├── src/
│   ├── assets/              # Static assets 🖼️
│   ├── components/          # Reusable components 🔧
│   ├── hooks/               # Custom React hooks 🔄
│   ├── services/            # Client-side API services 🌐
│   ├── types/               # TypeScript types 🏷️
│   ├── utils/               # Utility functions 🛠️
```

### 🖥️ Server Folder Structure

```graphql
server/
├── src/
│   ├── models/              # Data models 🗂️
│   ├── controllers/         # Request handling logic 🎮
│   ├── routes/              # API route definitions 🚦
│   ├── services/            # Server-side services 🌐
│   ├── middlewares/         # Express middlewares 🔐
│   ├── types/               # TypeScript types 🏷️
│   ├── utils/               # Utility functions 🛠️
```

## 📦 Execution

As this script was published as an npm package, you can execute it directly via the command line with

```bash
npx vite-express-cli <your-project-name>
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🧑‍🤝‍🧑 Authors

- Lennard Geißler (@LennardGeissler)