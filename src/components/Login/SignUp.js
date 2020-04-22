import React, { useState } from "react";

const SignUp = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [submitted, setSubmitted] = useState({});

  const handleSignUp = () => {
    setSubmitted({ username: inputUserName, password: inputPassword });
  };
  return (
    <>
      <div>Please SignUp</div>
      <p>Username</p>
      <input
        type="text"
        value={inputUserName}
        onChange={(e) => setInputUserName(e.target.value)}
      />
      <p>Password</p>
      <input
        type="text"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>signup</button>
    </>
  );
};

export default SignUp;
