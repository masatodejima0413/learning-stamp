import styled from "styled-components";
import { Send } from "@styled-icons/zondicons/Send";

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  min-height: 300px;
  margin: 50px auto 50px auto;
  padding: 30px;
  font-family: "Poppins", sans-serif;
  /* background-color: #93b5c6; */
  background: rgba(93, 2, 255, 0.4);
  border-radius: 10px;
  position: relative;
  @media (max-width: 480px) {
    box-sizing: border-box;
    width: 95%;
  }
  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 10px;
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(235deg, #5d02ff, #fff, #e91e63);
    z-index: -1;
    filter: blur(40px);
  }
`;

export const StyledWelcomeUser = styled.h1`
  color: #fff;
  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

export const StyledLearnedInput = styled.input`
  border: none;
  border-bottom: 2px solid #fff;
  margin: 20px 0 20px 0;
  padding: 5px 0;
  background: transparent;
  outline: none;
  font-size: 25px;
  text-align: center;

  color: #fff;
  &::placeholder {
    color: #fff;
    opacity: 0.5;
    text-align: center;
    font-size: 20px;
  }
`;
export const StyledDateInput = styled.input`
  border: none;
  border-bottom: 2px solid #fff;
  margin: 20px 0 20px 0;
  padding: 5px 0;
  background: transparent;
  outline: none;
  font-size: 15px;
  text-align: center;
  color: #fff;
  &::placeholder {
    color: #fff;
    opacity: 0.5;
    text-align: center;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::-webkit-clear-button {
    -webkit-appearance: none;
  }
`;
export const StyledCommentTextarea = styled.textarea`
  width: 80%;
  border: none;
  border: 2px solid #fff;
  border-radius: 10px;
  height: calc(1.3em * 5);
  line-height: 1.3;
  margin: 20px 0 20px 0;
  padding: 5px 0;
  background: transparent;
  outline: none;
  font-size: 20px;
  color: #fff;
  text-align: center;

  &::placeholder {
    color: #fff;
    opacity: 0.5;
    text-align: center;
    line-height: calc(1.3em * 5);
  }
`;

export const SendIcon = styled(Send)`
  width: 40px;
  height: 40px;
  color: #fff;
  margin: 20px 0 20px 0;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.3, 1.3);
  }
`;
