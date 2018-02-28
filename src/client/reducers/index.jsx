import {combineReducers} from "redux";

// const name = (store, action) => {
//   console.log('store: ' + store);
//   if (action.type === "CHANGE_NAME") {
//     return {
//       name: action.payload
//     };
//   }
//
//   return store || {name: "default store"};
// };

const app = (store, action) => {
  switch (action.type) {

  case 'CHANGE_NAME' :
   let newState = Object.assign({}, store);
   newState.name = action.payload;
   return newState;

  default:
    return store || { name: "default" };
  }
};

export default combineReducers({
  app,
});
