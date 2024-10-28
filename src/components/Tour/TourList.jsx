import styled from "styled-components";
import { TourItem } from "./TourItem";

export const TourList = ({ tours = [] }) => {
  return (
    <StyledUl>
      {tours?.map((item) => (
        <TourItem key={item.id} {...item} />
      ))}
    </StyledUl>
  );
};
const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-top: 50px;
  gap:100px;
`;
