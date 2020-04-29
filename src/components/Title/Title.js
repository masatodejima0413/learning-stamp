import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { NoNewline } from "styled-icons/octicons";

const Title = () => {
  return (
    <StyledTitleContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <StyledTitle>LearningStamp</StyledTitle>
        {/* <StyledCopyright>presented by masatodejima</StyledCopyright> */}
      </Link>
    </StyledTitleContainer>
  );
};

export default Title;

const StyledTitle = styled.p`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  color: #e91e63;
  margin-bottom: 0;
  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

// const StyledCopyright = styled.p`
//   font-size: 7px;
//   font-family: "Poppins", sans-serif;
//   margin-top: 0;
// `;

const StyledTitleContainer = styled.div`
  a {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
