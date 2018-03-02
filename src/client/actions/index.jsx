export const changeName = (text) => {
  return {
    type: "CHANGE_NAME",
    payload: text
  };
};

export const importVideos = (array) => {
  return {
    type: "IMPORT_VIDEOS",
    payload: array
  };
};

export const toggleSearchResults = (bool) => {
  return {
    type: "TOGGLE_SEARCH_RESULTS",
    payload: bool
  };
};
