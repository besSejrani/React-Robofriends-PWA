import * as uiTypes from "@Redux/ui/uiTypes";

const initialState = { isSideDrawerOpen: false, isDarkTheme: false, user: {} };

export default (state = initialState, actions: any) => {
  const { type, payload } = actions;

  switch (type) {
    case uiTypes.TOGGLE_SIDE_DRAWER:
      return { ...state, isSideDrawerOpen: !state.isSideDrawerOpen };

    case uiTypes.TOGGLE_THEME:
      return { ...state, isDarkTheme: !state.isDarkTheme };

    case uiTypes.GET_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
};
