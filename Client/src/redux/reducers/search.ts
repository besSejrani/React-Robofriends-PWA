import * as robotType from "../actions/robotType";

const initialState = {
  search: "",
};

export default (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case robotType.CHANGE_SEARCH_FIELD:
      return { ...state, search: payload };

    default:
      return state;
  }
};
