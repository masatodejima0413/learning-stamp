import React, { useState } from "react";
import {
  StyledFormWrapper,
  StyledLearnedInput,
  StyledDateInput,
  StyledCommentTextarea,
  SendIcon,
} from "./Form.styles";
import uuid from "react-uuid";
import { stampsRef } from "../../base/base";

const Form = () => {
  const id = uuid();
  const [learned, setLearned] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

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
    stampsRef.push().set({ learned, date, comment });
    //value={value}でinputの中身をからにする
    setLearned("");
    setDate("");
    setComment("");
  };

  return (
    <StyledFormWrapper>
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
