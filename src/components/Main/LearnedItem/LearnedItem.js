import React, { useState, useEffect } from "react";
import { database, databaseRef } from "../../../base/base";

import {
  StyledLearnedItem,
  StyledLearnedItemsContainer,
  StyledLearned,
  StyledDate,
  StyledComment,
  DeleteIcon,
} from "./LearnedItem.styles";

const LearnedItem = ({ userId }) => {
  const [exState, setExState] = useState({});

  const getDb = () => {
    let ref = database.ref(`users/${userId}/items`);
    ref.on("value", (snapshot) => {
      setExState(snapshot.val());
    });
  };
  useEffect(() => {
    getDb();
  }, []);

  const deleteItem = (key) => {
    databaseRef.child("users").child(userId).child("items").child(key).remove();
  };

  const noItem = exState === null;

  return (
    <StyledLearnedItemsContainer>
      {noItem ? (
        <h1>No item found</h1>
      ) : (
        Object.keys(exState).map((key) => {
          const item = exState[key];
          return (
            <StyledLearnedItem key={key}>
              <StyledLearned>{item.learned}</StyledLearned>
              <StyledDate>{item.date}</StyledDate>
              <StyledComment>{item.comment}</StyledComment>
              <DeleteIcon onClick={() => deleteItem(key)} />
            </StyledLearnedItem>
          );
        })
      )}
    </StyledLearnedItemsContainer>
  );
};

export default LearnedItem;
