import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 50px auto 0 auto;
  padding: 30px;
  width: 400px;
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background: linear-gradient(
    235deg,
    rgba(93, 2, 255, 0.8) 0%,
    20%,
    rgba(93, 2, 255, 0.5) 40%,
    rgba(233, 30, 99, 0.5) 60%,
    80%,
    rgba(233, 30, 99, 0.8) 100%
  );
`;

export const StyledFormTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const StyledLabelInputWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled.input`
  border: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 40%;
  padding: 5px;
`;

export const StyledLabel = styled.label`
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 20px;
`;

export const StyledButton = styled.div`
  border-radius: 30px;
  border: none;
  margin-top: 20px;
  padding: 10px 30px;
  color: #e91e63;
  background-color: white;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0 12px 10px -6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  &:hover {
    background-color: #e91e63;
    color: white;
  }
  &:active {
    box-shadow: 0 0px 10px -6px rgba(0, 0, 0, 0.3);
    transform: translateY(3px);
  }
`;

export const StyledToggleText = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  color: #e91e63;
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.4;
  }
`;
