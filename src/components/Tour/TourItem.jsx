import styled from "styled-components";

export const TourItem = ({ id, title, price, imageUrl, description, date }) => {
  return (
    <Styledli>
      <StyledImage src={imageUrl} alt="" />
      <h3 style={{ color: "white" }}>{title}</h3>
      <div>
        <b style={{ color: "white" }}>${price}</b>
        <span style={{ marginLeft: "10px", color: "white" }}>{date}</span>
        <StyledDiv>
          <StyledDescription>{description}</StyledDescription>
          <StyledButton>Посмотреть</StyledButton>
        </StyledDiv>
      </div>
    </Styledli>
  );
};

const Styledli = styled.li`
  width: 350px;
  height: 600px;
  border: 2px solid white;
  border-radius: 20px;
  padding: 20px 10px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 35px;
  background-color: #1919c1;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
const StyledDescription = styled.p`
  margin-top: 20px;
  color: white;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 200px;
`;
