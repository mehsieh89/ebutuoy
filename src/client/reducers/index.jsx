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

const video = (store, action) => {
  switch (action.type) {

  case 'IMPORT_VIDEOS' :
    let newState3 = Object.assign({}, store);
    newState3.current = action.payload;
    return newState3;

  case 'TOGGLE_SEARCH_RESULTS' :
    let newState2 = Object.assign({}, store);
    newState2.searched = action.payload;
    return newState2;

  default:
    return store || { current: [], searched: false };
  }
};

export default combineReducers({
  app, video
});
