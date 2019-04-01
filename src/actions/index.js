import { CHANGE_SEARCH_FIELD, GETDATA } from './type';

import axios from 'axios';

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const getData = () => async dispatch => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: GETDATA,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
