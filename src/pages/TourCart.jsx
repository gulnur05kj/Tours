import React from "react";
import { TourList } from "../components/Tour/TourList";

export const TourCart = () => {
  const novigate = useNavigate();
  return (
    <div>
      <Navigation>
        <NavLink to="/add form">Add form</NavLink>
      </Navigation>
      <TourList />
    </div>
  );
};

export default TourCart;
