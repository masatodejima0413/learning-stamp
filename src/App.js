import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [value, setValue] = useState("");
  //combinereducerからtodoを取り出してくる、これでstore.dispatchとか書かないでよい
  const todos = useSelector((state) => state.todos);
  //dispatchつかうためにこれ
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({
      type: "ADD",
      comment: value,
    });
    //value={value}でinputの中身をからにする
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
