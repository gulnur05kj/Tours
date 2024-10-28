import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const novigate = useNavigate();
  return (
    <StyledHeader>
      <h1 onClick={() => novigate("/")}>Logo</h1>

      <Navigation>
        <NavLink to="/add-form">Add form</NavLink>
        <Link to="/favorite">About</Link>
        <Link to="/carts">Cart</Link>
        <Link to="/profile">Profile</Link>
      </Navigation>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #1919c1;

  & > h1 {
    font-size: 32px;
    font-weight: 600;
    color: #f8f6f6;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;
  & > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;

    color: white;
    cursor: pointer;
  }
`;
