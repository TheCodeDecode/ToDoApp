const initialState = {
  data: [],
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id,
          },
        ],
      };
    case "DELETE_TODO":
      const todos = state.data.filter((item) => item.id !== action.id);
      return {
        ...state,
        data: todos,
      };

    default:
      return state;
  }
};
