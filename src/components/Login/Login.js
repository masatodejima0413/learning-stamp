import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../../base/base";
import {
  StyledFormTitle,
  StyledInput,
  StyledLabel,
  StyledLabelInputWrapper,
  StyledButton,
  StyledLoginFailed,
} from "./Login.styles";

const Login = ({ PassCheck }) => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [users, setUsers] = useState({});
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    let loginUsername = PassCheck(users, inputUserName, inputPassword);
    setInputUserName("");
    setInputPassword("");
    ToMainPage(loginUsername);
  };

  const ToMainPage = (loginUsername) => {
    //このURLに飛ぶ。<Link to=> だとレンダリングする前にはloginUsernameが空だから無理
    if (loginUsername !== undefined) {
      setIsLoginFailed(false);
      history.push(`/${loginUsername}`);
    } else {
      setIsLoginFailed(true);
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
      {isLoginFailed && (
        <StyledLoginFailed>
          Your username or password is incorrect
        </StyledLoginFailed>
      )}
    </>
  );
};

export default Login;
