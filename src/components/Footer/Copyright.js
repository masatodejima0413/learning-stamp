import React from "react";
import styled from "styled-components";

const Copyright = () => {
  return (
    <StyledCopyright>
      powered by{" "}
      <a href="https://masatodejima-com-gatsby.now.sh" target="_blanc">
        masatodejima
      </a>
    </StyledCopyright>
  );
};

export default Copyright;

const StyledCopyright = styled.p`
  text-align: center;
  color: black;
  opacity: 0.7;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 15px;
  margin-top: 50px;
  a {
    color: #00adb5;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }
`;
