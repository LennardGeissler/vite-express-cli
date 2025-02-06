import { execSync } from "child_process";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const projectName = process.argv[2] || "my-project";
const root = join(process.cwd(), projectName);
const clientDir = join(root, "client");
const serverDir = join(root, "server");

// Create project structure
mkdirSync(root, { recursive: true });
mkdirSync(clientDir, { recursive: true });
mkdirSync(serverDir, { recursive: true });

console.log("📁 Creating project folders...");

// Initialize client with Vite, React, TypeScript, and SWC
console.log("🚀 Setting up client...");
execSync("npm create vite@latest client -- --template react-ts", { cwd: root, stdio: "inherit" });
execSync("npm install @vitejs/plugin-react-swc", { cwd: clientDir, stdio: "inherit" });

// Initialize server with Express and TypeScript
console.log("🛠 Setting up server...");
execSync("npm init -y", { cwd: serverDir, stdio: "inherit" });
execSync("npm install express", { cwd: serverDir, stdio: "inherit" });
execSync("npm install --save-dev typescript @types/express ts-node nodemon", { cwd: serverDir, stdio: "inherit" });

// Create TypeScript config for server
writeFileSync(
    join(serverDir, "tsconfig.json"),
    JSON.stringify({
        compilerOptions: {
            target: "ES6",
            module: "CommonJS",
            outDir: "dist",
            rootDir: "src",
            strict: true,
        },
    }, null, 2)
);

// Create folders in client/src
["assets", "components", "hooks", "services", "types", "utils"].forEach(dir => 
    mkdirSync(join(clientDir, "src", dir), { recursive: true })
);

// Create folders in server/src
["models", "controllers", "routes", "services", "middlewares", "types", "utils"].forEach(dir => 
    mkdirSync(join(serverDir, "src", dir), { recursive: true })
);

// Create standard files
console.log("📄 Creating standard files...");
writeFileSync(join(root, "README.md"), `# ${projectName}\n\nGenerated project setup.`);
writeFileSync(join(root, "LICENSE"), "MIT License\n\nGenerated license file.");
writeFileSync(join(root, ".gitignore"), "node_modules\ndist\n.env\n");

console.log("✅ Setup complete!");