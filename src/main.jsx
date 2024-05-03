import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/ContextAPI/Home.jsx";
import About from "./Component/ContextAPI/About.jsx";
import ContactUs from "./Component/ContextAPI/ContactUs.jsx";
import FactorialNumber from "./Component/FactorialNumber/FactorialNumber.jsx";
import PalindromString from "./Component/FactorialNumber/PalindromString.jsx";
import Form from "./Component/ReactForms/Form.jsx";
// import { ThemeProvider } from "./Component/ContextAPI/themeContext.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/factorial",
    element: <FactorialNumber />,
  },
  {
    path: "/palindrom",
    element: <PalindromString />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
