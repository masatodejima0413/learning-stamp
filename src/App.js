import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LearnedItem from "./components/LearnedItem/LearnedItem";
import Title from "./components/Title/Title";

const App = () => {
  const id = 0;
  const [learned, setLearned] = useState("");
  const [date, setDate] = useState();
  const [comment, setComment] = useState("");

  var today = new Date();
  today.setDate(today.getDate());
  var yyyy = today.getFullYear();
  var mm = ("0" + (today.getMonth() + 1)).slice(-2);
  var dd = ("0" + today.getDate()).slice(-2);
  var initialValue = `${yyyy}-${mm}-${dd}`;
  // setDate(initialValue);

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
    setLearned("");
    setDate(initialValue);
    setComment("");
  };

  return (
    <div>
      <Title />
      {/* {learnedItems.map((item) => {
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
      })} */}
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
      <LearnedItem />
    </div>
  );
};

export default App;
