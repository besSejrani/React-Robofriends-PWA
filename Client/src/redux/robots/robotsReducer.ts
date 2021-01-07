import * as robotType from "./robotType";

const initialState = { search: "", robots: [], robot: {} };

export default (state = initialState, actions: any) => {
  const { type, payload } = actions;

  switch (type) {
    case robotType.CHANGE_SEARCH_FIELD:
      return { ...state, search: payload };

    case robotType.SEARCH_ROBOT:
      return { ...state };

    case robotType.GET_ROBOTS:
      return { ...state, robots: payload };

    case robotType.GET_ROBOT:
      return { ...state, robot: payload };

    default:
      return state;
  }
};
