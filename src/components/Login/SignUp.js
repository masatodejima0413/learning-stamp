import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { databaseRef } from "../../base/base";
import {
  StyledFormTitle,
  StyledInput,
  StyledLabel,
  StyledLabelInputWrapper,
  StyledButton,
} from "./Login.styles";

const SignUp = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const history = useHistory();

  const handleSignUp = () => {
    ToMainPage(AddDb());
  };

  const AddDb = () => {
    const ref = databaseRef
      .child("users")
      .push({ username: inputUserName, password: inputPassword });
    return ref.key;
  };

  const ToMainPage = (newUserId, cb) => {
    //このURLに飛ぶ。<Link to=> だとレンダリングする前にはnewUserIdが空だから無理
    if (newUserId !== undefined) {
      history.push(`/${newUserId}`);
    } else {
      throw new Error("User not defined.");
    }
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
