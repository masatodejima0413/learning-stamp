import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = () => {
  return (
    <StyledTitleContainer>
      <StyledTitle>
        <Link to="/">
          <span>L</span>earning<span>S</span>tamp
        </Link>
      </StyledTitle>
    </StyledTitleContainer>
  );
};

export default Title;

const StyledTitle = styled.p`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  a {
    text-decoration: none;
    color: #e91e63;
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
