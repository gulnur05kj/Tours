import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
