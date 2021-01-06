import * as uiTypes from "./uiTypes";

const initialState = { isSideDrawerOpen: false };

export default (state = initialState, actions: any) => {
  const { type, payload } = actions;

  switch (type) {
    case uiTypes.TOGGLE_SIDE_DRAWER:
      return { ...state, isSideDrawerOpen: !state.isSideDrawerOpen };

    default:
      return state;
  }
};
