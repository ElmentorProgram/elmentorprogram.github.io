import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ArabicPage from "./ArabicPage.tsx";
import "./styles/index.css";

// Create a custom error component
const ErrorPage = () => (
  <div
    style={{
      padding: "2rem",
      textAlign: "center",
      fontFamily: "system-ui, sans-serif",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    <h1 style={{ color: "#0078d4" }}>Oops! Page Not Found</h1>
    <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
      The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="#/"
      style={{
        backgroundColor: "#0078d4",
        color: "white",
        padding: "0.75rem 1.5rem",
        borderRadius: "4px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Return to Home Page
    </a>
  </div>
);

// Create router with appropriate routes
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/arabic",
    element: <ArabicPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
