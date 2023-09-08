import * as uiTypes from "@Redux/ui/uiTypes";

// ========================================================================================================

export const toggleSideDrawer = () => {
  return {
    type: uiTypes.TOGGLE_SIDE_DRAWER,
  };
};

// ========================================================================================================

export const toggleTheme = () => {
  return {
    type: uiTypes.TOGGLE_THEME,
  };
};

export const getUser = (payload: any) => {
  return {
    type: uiTypes.GET_USER,
    payload,
  };
};

// ========================================================================================================
