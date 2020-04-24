import React, { useState } from "react";
import { databaseRef } from "../../base/base";
import {
  StyledFormTitle,
  StyledInput,
  StyledLabel,
  StyledLabelInputWrapper,
  StyledButton,
} from "./styles";

const SignUp = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleSignUp = () => {
    databaseRef
      .child("users")
      .push({ username: inputUserName, password: inputPassword });
    setInputUserName("");
    setInputPassword("");
  };
  return (
    <>
      <StyledFormTitle>Sign Up</StyledFormTitle>
      <StyledLabelInputWrapper>
        <StyledLabel>username : </StyledLabel>
        <StyledInput
          type="text"
          value={inputUserName}
          onChange={(e) => setInputUserName(e.target.value)}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <StyledLabel>password : </StyledLabel>
        <StyledInput
          type="text"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
      </StyledLabelInputWrapper>
      <StyledButton onClick={handleSignUp}>Sign Up</StyledButton>
    </>
  );
};

export default SignUp;
