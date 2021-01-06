import * as robotType from "./robotType";

const initialState = { robots: [], robot: {} };

export default (state = initialState, actions: any) => {
  const { type, payload } = actions;

  switch (type) {
    case robotType.GET_ROBOTS:
      return { ...state, robots: payload };

    case robotType.GET_ROBOT:
      return { ...state, robot: payload };

    default:
      return state;
  }
};
