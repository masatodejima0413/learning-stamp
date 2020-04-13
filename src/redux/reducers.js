import { combineReducers } from "redux";

export const learnedItemReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          learned: action.learned,
          date: action.date,
          comment: action.comment,
        },
      ];
    case "DELETE":
      //filterで一件一件査定して条件一致した新しい配列を作成、mapみたいな感じ
      return state.filter(
        (learnedItem) => learnedItem.comment !== action.comment
      );
    default:
      return state;
  }
};

export default combineReducers({
  learnedItems: learnedItemReducer,
});
