import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { MainPage } from "../pages/MainPage";
import { TourForm } from "../components/Tour/TourForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "add-form",
        element: <TourForm />,
      },
      {
        path: "profile",
        element: <h1>Profile</h1>,
      },
      {
        path: "favorit",
        element: <h1>Favorit</h1>,
      },
    ],
  },
]);
