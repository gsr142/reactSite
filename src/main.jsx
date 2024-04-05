import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import About from "./components/pages/About.jsx";
// import Contact from "./components/pages/Contact.jsx";
// import Portfolio from "./components/pages/Portfolio.jsx";
import Error from "./components/pages/Error.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
    //   {
    //     path: "contact",
    //     element: <Contact />,
    //   },
    //   {
    //     path: "portfolio",
    //     element: <Portfolio />,
    //   },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
