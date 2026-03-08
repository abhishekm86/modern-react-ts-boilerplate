# Modern React + TypeScript Scaffolding

A highly optimized, production-ready boilerplate designed to jumpstart React development. It prioritizes clean architecture, minimal configuration friction, and immediate testability using modern build tools.

## 🚀 Tech Stack

* **Core:** React 18+ & TypeScript
* **Build Tool:** Vite (for lightning-fast HMR and optimized builds)
* **Styling:** Tailwind CSS v4 (Utility-first, zero-config Vite plugin)
* **Testing:** Vitest & React Testing Library (DOM assertion ready)

## 📂 Architecture Overview

The application follows a modular, feature-driven structure to ensure scalability and maintain clean separation of concerns as the application grows.

* `src/components/` - Isolated, reusable UI elements. Each component has its own directory containing the component, its tests, and a barrel export.
* `src/hooks/` - Custom React hooks for abstracted, reusable state and side-effect logic.
* `src/utils/` - Pure, framework-agnostic helper functions (formatters, parsers, math).
* `src/types/` - Global TypeScript interfaces and type definitions for API payloads and shared state.

## 🛠️ Available Scripts

Execute these commands in the terminal via your package manager (`npm run <script>`).

| Command | Description |
| :--- | :--- |
| `dev` | Starts the local development server with Hot Module Replacement (HMR). |
| `build` | Compiles the TypeScript code and bundles the app for production deployment. |
| `lint` | Runs ESLint to statically analyze the codebase for formatting and logic errors. |
| `preview` | Boots up a local web server to preview the compiled production build. |
| `test` | Launches the Vitest test runner in interactive watch mode. |
| `test:ui` | Opens the Vitest UI dashboard in your browser for a visual testing experience. |
| `test:run` | Executes the test suite once without watching for file changes (ideal for CI/CD pipelines). |

## 🧪 Testing Strategy

This project enforces co-located tests. Test files should live directly next to their respective components or utility files (e.g., `Button.test.tsx` lives in the `Button/` directory). The environment is pre-configured with `jsdom` to support deep DOM assertion and behavioral testing right out of the box.
