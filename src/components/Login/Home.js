import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { FormWrapper, StyledToggleText } from "./styles";

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  return (
    <FormWrapper>
      {isLoginOpen ? (
        <>
          <Login />
          <p>
            Don't you have an account? Please{" "}
            <StyledToggleText onClick={() => setIsLoginOpen(!isLoginOpen)}>
              sign up
            </StyledToggleText>
          </p>
        </>
      ) : (
        <>
          <SignUp />
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
