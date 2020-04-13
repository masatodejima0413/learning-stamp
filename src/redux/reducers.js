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
      return state.filter((todo) => todo.comment !== action.comment);
    default:
      return state;
  }
};

export default combineReducers({
  todos: todoReducer,
});
