import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <StyledTitleContainer>
      <StyledTitle>
        <span>L</span>earning<span>S</span>tamp
      </StyledTitle>
    </StyledTitleContainer>
  );
};

export default Title;

const StyledTitle = styled.p`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  color: #e91e63;
  /* opacity: 0.5;
  span {
    font-size: 70px;
    color: #5d02ff;
  } */
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
