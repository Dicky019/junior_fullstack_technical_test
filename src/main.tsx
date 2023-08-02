import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KreasiHandmadeProduk from "./routes/KreasiHandmadeProduk";
import Home from "./routes/Home";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/kreasi-handmade-produk",
    element: <KreasiHandmadeProduk />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
