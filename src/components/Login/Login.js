import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../../base/base";
import {
  StyledFormTitle,
  StyledInput,
  StyledLabel,
  StyledLabelInputWrapper,
  StyledButton,
} from "./styles";

const Login = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [users, setUsers] = useState({});
  let loginUsername;
  let history = useHistory();

  const handleLogin = () => {
    LoginCheck();
    setInputUserName("");
    setInputPassword("");
    //このURLに飛ぶ。<Link to=> だとレンダリングする前にはloginUsernameが空だから無理
    if (loginUsername !== undefined) {
      history.push(`/${loginUsername}`);
    }
  };
  const getDb = () => {
    const ref = database.ref("users/");
    ref.on("value", (snapshot) => {
      setUsers(snapshot.val());
    });
  };
  useEffect(() => {
    getDb();
  }, []);

  const LoginCheck = () => {
    Object.keys(users).forEach((user) => {
      if (
        inputUserName === users[user].username &&
        inputPassword === users[user].password
      ) {
        loginUsername = user;
        console.log(`${loginUsername} will login!!`);
        return;
      }
    });
  };
  return (
    <>
      <StyledFormTitle>Login</StyledFormTitle>
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
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
      </StyledLabelInputWrapper>
      <StyledButton onClick={handleLogin}>Login</StyledButton>
    </>
  );
};

export default Login;
