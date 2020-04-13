import { combineReducers } from "redux";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          comment: action.comment,
        },
      ];
    case "DELETE":
      //filterで一件一件査定して条件一致した新しい配列を作成、mapみたいな感じ
      return state.filter((todo) => todo.comment !== action.comment);
    default:
      return state;
  }
};

export default combineReducers({
  todos: todoReducer,
});
