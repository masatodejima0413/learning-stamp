import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { FormWrapper, StyledToggleText } from "./Login.styles";

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  const PassCheck = (users, inputUserName, inputPassword) => {
    let loginUserId;

    Object.keys(users).forEach((userId) => {
      if (
        inputUserName === users[userId].username &&
        inputPassword === users[userId].password
      ) {
        console.log(`${userId} will login!!`);
        loginUserId = userId;
      }
    });
    return loginUserId;
  };

  return (
    <FormWrapper>
      {isLoginOpen ? (
        <>
          <Login PassCheck={PassCheck} />
          <p>
            Don't you have an account? Please{" "}
            <StyledToggleText onClick={() => setIsLoginOpen(!isLoginOpen)}>
              sign up
            </StyledToggleText>
          </p>
        </>
      ) : (
        <>
          <SignUp PassCheck={PassCheck} />
          <p>
            Do you have an account? Please{" "}
            <StyledToggleText onClick={() => setIsLoginOpen(!isLoginOpen)}>
              login
            </StyledToggleText>
          </p>
        </>
      )}
    </FormWrapper>
  );
};

export default Home;
