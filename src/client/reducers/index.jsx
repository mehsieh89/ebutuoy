import {combineReducers} from "redux";

const name = (store, action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      name: action.payload
    };
  }

  return store || {name: "default store"};
};

export default combineReducers({
  name,
});
