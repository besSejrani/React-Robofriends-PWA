import * as robotType from "./robotType";
import axios from "axios";

// ========================================================================================================

export const searchField = (text: string) => {
  return {
    type: robotType.CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

// ========================================================================================================

export const getRobots = () => async (dispatch: any) => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

  dispatch({
    type: robotType.GET_ROBOTS,
    payload: data,
  });
};

// ========================================================================================================

export const getRobot = (payload: string) => async (dispatch: any) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${payload}`);

  dispatch({
    type: robotType.GET_ROBOT,
    payload: data,
  });
};

// ========================================================================================================
