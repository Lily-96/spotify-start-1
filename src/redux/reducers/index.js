const initialState = {
  favorite: {
    content: [],
  },
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: [...state.favourite.content, action.payload],
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
