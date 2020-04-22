import React, { useState } from "react";

const Login = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [submitted, setSubmitted] = useState({});

  const handleLogin = () => {
    setSubmitted({ username: inputUserName, password: inputPassword });
  };
  return (
    <>
      <div>Please Login</div>
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
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
