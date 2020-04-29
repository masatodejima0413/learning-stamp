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
  const [users, setUsers] = useState({});

  const getDb = () => {
    let ref = database.ref(`users/${userId}/items`);
    ref.on("value", (snapshot) => {
      setUsers(snapshot.val());
    });
  };
  useEffect(() => {
    getDb();
    // eslint-disable-next-line
  }, []);

  const deleteItem = (key) => {
    databaseRef.child("users").child(userId).child("items").child(key).remove();
  };

  const noItem = users === null;

  return (
    <StyledLearnedItemsContainer>
      {noItem ? (
        <h1>No item found</h1>
      ) : (
        Object.keys(users).map((key) => {
          const item = users[key];
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
