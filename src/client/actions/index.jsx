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

export const importListVideos = (array) => {
  return {
    type: "IMPORT_LIST_VIDEOS",
    payload: array
  };
};

export const toggleSearchResults = (bool) => {
  return {
    type: "TOGGLE_SEARCH_RESULTS",
    payload: bool
  };
};

export const changeMainVideo = (index) => {
  return {
    type: "CHANGE_MAIN_VIDEO",
    payload: index
  };
}
