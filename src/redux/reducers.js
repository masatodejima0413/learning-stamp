import { combineReducers } from "redux";
import uuid from "react-uuid";

export const learnedItemReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuid(),
          learned: action.learned,
          date: action.date,
          comment: action.comment,
        },
      ];
    case "DELETE":
      //filterで一件一件査定して条件一致した新しい配列を作成、mapみたいな感じ
      return state.filter((learnedItem) => learnedItem.id !== action.id);
    default:
      return state;
  }
};

export default combineReducers({
  learnedItems: learnedItemReducer,
});
