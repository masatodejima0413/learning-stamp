import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledLearnedItem,
  StyledLearnedItemsContainer,
  StyledLearned,
  StyledDate,
  StyledComment,
  DeleteIcon,
} from "./LearnedItem.styles";

const LearnedItem = () => {
  //combinereducerからtodoを取り出してくる、これでstore.dispatchとか書かないでよい
  const learnedItems = useSelector((state) => state.learnedItems);
  const dispatch = useDispatch();

  return (
    <StyledLearnedItemsContainer>
      {learnedItems.map((item) => {
        return (
          <StyledLearnedItem key={item.id}>
            <StyledLearned>{item.learned}</StyledLearned>
            <StyledDate>{item.date}</StyledDate>
            <StyledComment>{item.comment}</StyledComment>
            <DeleteIcon
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  id: item.id,
                })
              }
            />
          </StyledLearnedItem>
        );
      })}
    </StyledLearnedItemsContainer>
  );
};

export default LearnedItem;
