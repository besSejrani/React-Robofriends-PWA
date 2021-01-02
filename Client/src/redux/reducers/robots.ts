import * as robotType from "../actions/robotType";

const initialState = { robots: [] };

export default (state = initialState, actions: any) => {
  const { type, payload } = actions;

  switch (type) {
    case robotType.GET_ROBOT_DATA:
      return { ...state, robots: payload };

    default:
      return state;
  }
};
