/**
 * Entry point for the React application.
 * Initializes the app and renders it into the DOM.
 */

import { StrictMode } from "react";
/**
 * StrictMode is a React wrapper that enables additional checks and warnings
 * during development for detecting potential issues.
 */

import { createRoot, type Root } from "react-dom/client";
/**
 * createRoot is the React 18+ API for rendering a root React component
 * into a DOM element.
 */

import App from "./App";
/**
 * Import the main App component, which is the root component of the app.
 */

import "./assets/styles/index.css";
/**
 * Import global styles, including Tailwind and custom fonts.
 */

/**
 * Select the HTML element with id "root" and create a React root.
 * The non-null assertion (!) ensures TypeScript that the element exists.
 */
const root: Root = createRoot(document.getElementById("root")!);

/**
 * Render the main application inside StrictMode.
 */
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
