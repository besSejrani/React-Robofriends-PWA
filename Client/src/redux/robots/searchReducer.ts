import * as robotType from "./robotType";

const initialState = {
  search: "",
};

export default (state = initialState, actions: any) => {
  const { type, payload } = actions;

  switch (type) {
    case robotType.CHANGE_SEARCH_FIELD:
      return { ...state, search: payload };

    default:
      return state;
  }
};
