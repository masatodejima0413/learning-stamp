import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    dispatch({
      type: "ADD",
      comment: value,
    });
    setValue("");
  };

  return (
    <div>
      todos
      {todos.map((item) => {
        return (
          <div>
            <p>{item.comment}</p>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  comment: item.comment,
                })
              }
            ></button>
          </div>
        );
      })}
      <input
        type="text"
        placeholder="inputplease"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit!!!</button>
    </div>
  );
};

export default App;
