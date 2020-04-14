import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledLearnedItem } from "./LearnedItem.styles";

const LearnedItem = () => {
  //combinereducerからtodoを取り出してくる、これでstore.dispatchとか書かないでよい
  const learnedItems = useSelector((state) => state.learnedItems);
  const dispatch = useDispatch();

  return (
    <>
      {learnedItems.map((item) => {
        return (
          <StyledLearnedItem>
            <p>{item.comment}</p>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  comment: item.comment,
                })
              }
            >
              DELETE!!!
            </button>
          </StyledLearnedItem>
        );
      })}
    </>
  );
};

export default LearnedItem;
