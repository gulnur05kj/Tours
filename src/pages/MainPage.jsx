import { useEffect, useState } from "react";
import { TourList } from "../components/Tour/TourList";
import { axiosInstance } from "../config/axiosInstance";
import { toast } from "react-toastify";
import { useRucerApi } from "../components/hooks/useReducerApi";

export const MainPage = () => {
  const [tours] = useRucerApi();
  return (
    <div>
      {/* <Header />
      <TourForm /> */}
      <TourList tours={tours} />
    </div>
  );
};
