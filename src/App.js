import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [id, setId] = useState();
  const [learned, setLearned] = useState("");
  const [date, setDate] = useState();
  const [comment, setComment] = useState("");
  //combinereducerからtodoを取り出してくる、これでstore.dispatchとか書かないでよい
  const learnedItems = useSelector((state) => state.learnedItems);
  //dispatchつかうためにこれ
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({
      type: "ADD",
      id: id,
      learned: learned,
      date: date,
      comment: comment,
    });
    //value={value}でinputの中身をからにする
    setComment("");
  };

  return (
    <div>
      learnedItems
      {learnedItems.map((item) => {
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
        type="number"
        placeholder="enter id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter learned"
        value={learned}
        onChange={(e) => setLearned(e.target.value)}
      />
      <input
        type="date"
        placeholder="enter date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleSubmit} value="">
        Submit!!
      </button>
    </div>
  );
};

export default App;
