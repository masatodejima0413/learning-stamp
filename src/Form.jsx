import React, { useState } from "react";

const NameForm = () => {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    setTodo([...todos, value]);
    console.log(todos);
  };
  return (
    <div>
      example form
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NameForm;
