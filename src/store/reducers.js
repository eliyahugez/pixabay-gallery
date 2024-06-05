const initialState = {
  images: [],
  category: "default",
  currentPage: 1,
  sortBy: "id",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return { ...state, images: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload, currentPage: 1 };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_SORT":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
