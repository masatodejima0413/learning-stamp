import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <StyledTitleContainer>
      <StyledTitle>LearningStamp</StyledTitle>
    </StyledTitleContainer>
  );
};

export default Title;

const StyledTitle = styled.p`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  color: #e91e63;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
