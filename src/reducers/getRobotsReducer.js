import { GETDATA } from '../actions/type';

const initialState = { robots: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GETDATA:
      return { ...state, robots: action.payload };

    default:
      return state;
  }
};
