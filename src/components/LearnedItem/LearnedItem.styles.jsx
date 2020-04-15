import styled from "styled-components";
import { DeleteBin3 } from "@styled-icons/remix-line/DeleteBin3";

export const StyledLearnedItem = styled.div`
  margin: 50px;
  padding: 30px;
  width: 300px;
  min-height: 100px;
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const StyledLearned = styled.p`
  font-weight: 600;
  font-size: 40px;
  color: #3a3335;
  margin: 0;
`;

export const StyledDate = styled.p`
  font-size: 15px;
  color: #e91e63;
  opacity: 0.6;
  margin: 0;
`;

export const StyledComment = styled.p`
  font-size: 20px;
  color: #3a3335;
  margin: 30px 0 0;
`;

export const DeleteIcon = styled(DeleteBin3)`
  color: #e91e63;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 30px;
  right: 30px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.3, 1.3);
  }
`;

export const StyledLearnedItemsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;
