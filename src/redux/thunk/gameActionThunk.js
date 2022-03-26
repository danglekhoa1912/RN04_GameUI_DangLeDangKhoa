import axios from 'axios';
import {
  requestGameDetailFailed,
  requestGameDetailSuccess,
  requestListGameFailed,
  requestListGameSuccess,
} from '../actions/GameAction';

export const requestListGame = () => {
  return async dispatch => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://10.0.2.2:3000/games',
      });
      dispatch(requestListGameSuccess(response.data));
    } catch (e) {
      console.log(e);
      dispatch(requestListGameFailed(e));
    }
  };
};

export const requestGameDetail = id => {
  console.log(id);
  return async dispatch => {
    try {
      const response = await axios({
        method: 'GET',
        url: `http://10.0.2.2:3000/games/${id}`,
      });
      dispatch(requestGameDetailSuccess(response.data));
    } catch (e) {
      console.log(e);
      dispatch(requestGameDetailFailed(e));
    }
  };
};
