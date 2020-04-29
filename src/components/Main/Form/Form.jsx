import React, { useState, useEffect } from "react";
import {
  StyledFormWrapper,
  StyledWelcomeUser,
  StyledLearnedInput,
  StyledDateInput,
  StyledCommentTextarea,
  SendIcon,
} from "./Form.styles";
import { databaseRef, database } from "../../../base/base";

const Form = ({ userId }) => {
  const [learned, setLearned] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const ref = database.ref("users/");
    ref.on("value", (snapshot) => {
      setUsername(snapshot.val()[userId].username);
    });
    // eslint-disable-next-line
  }, []);

  //当日をyyyy-mm-ddで
  //   var today = new Date();
  //   today.setDate(today.getDate());
  //   var yyyy = today.getFullYear();
  //   var mm = ("0" + (today.getMonth() + 1)).slice(-2);
  //   var dd = ("0" + today.getDate()).slice(-2);
  //   var initialValue = `${yyyy}-${mm}-${dd}`;
  //   console.log(initialValue);
  // setDate(initialValue);

  const handleSubmit = () => {
    databaseRef
      .child("users")
      .child(userId)
      .child("items")
      .push()
      .set({ learned, date, comment });
    //value={value}でinputの中身をからにする
    setLearned("");
    setDate("");
    setComment("");
  };

  return (
    <StyledFormWrapper>
      <StyledWelcomeUser>Hi, {username}!!</StyledWelcomeUser>
      <StyledLearnedInput
        placeholder="What did you learn?"
        rows="5"
        cols="20"
        value={learned}
        required
        onChange={(e) => setLearned(e.target.value)}
      />
      <StyledDateInput
        type="date"
        placeholder="when?"
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
      />
      <StyledCommentTextarea
        type="textarea"
        placeholder="Leave comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <SendIcon onClick={handleSubmit} value="">
        Submit!!
      </SendIcon>
    </StyledFormWrapper>
  );
};

export default Form;
