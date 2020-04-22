import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  return (
    <>
      {isLoginOpen ? (
        <>
          <Login />
          <p>don't you have an account? Please sign up </p>
          <button onClick={() => setIsLoginOpen(!isLoginOpen)}>here</button>
        </>
      ) : (
        <>
          <SignUp />
          <p>do you have an account? Please login</p>
          <button onClick={() => setIsLoginOpen(!isLoginOpen)}>here</button>
        </>
      )}
    </>
  );
};

export default Home;
