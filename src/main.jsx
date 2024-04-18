import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
// import "./index.css";

import Contact from "./components/pages/Contact.jsx";
import TitlebarImageList from "./components/pages/Portfolio.jsx";
import Error from "./components/pages/Error.jsx";
import IntroDivider from "./components/pages/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <IntroDivider />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <TitlebarImageList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
