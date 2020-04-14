import styled from "styled-components";

export const StyledLearnedItem = styled.div`
  margin: 50px;
  height: 300px;
  width: 500px;
  border-radius: 10px;
  position: relative;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      235deg,
      #5d02ff 0%,
      10%,
      #fff 50%,
      90%,
      #e91e63 100%
    );
    z-index: -1;
    filter: blur(20px);
  }
  p {
    color: pink;
  }
`;
