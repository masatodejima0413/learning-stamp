import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { stampsRef } from "../../base/base";

import {
  StyledLearnedItem,
  StyledLearnedItemsContainer,
  StyledLearned,
  StyledDate,
  StyledComment,
  DeleteIcon,
} from "./LearnedItem.styles";

const LearnedItem = () => {
  const [exState, setExState] = useState({});

  const getDb = () => {
    const db = firebase.database();
    let ref = db.ref("learning-stamp/");
    ref.on("value", (snapshot) => {
      setExState(snapshot.val());
    });
  };
  useEffect(() => {
    getDb();
  }, []);

  const deleteItem = (key) => {
    stampsRef.child(key).remove();
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
            <StyledLearnedItem key={item.id}>
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
