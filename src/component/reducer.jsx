const initialState = {
  user: null,
};
const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log("action--", action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export { actionTypes, initialState };

export default reducer;
