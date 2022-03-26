export const REQUEST_LIST_GAME_SUCCESS = 'REQUEST_LIST_GAME_SUCCESS';
export const REQUEST_LIST_GAME_FAILED = 'REQUEST_LIST_GAME_FAILED';
export const REQUEST_GAME_DETAIL_SUCCESS = 'REQUEST_GAME_DETAIL_SUCCESS';
export const REQUEST_GAME_DETAIL_FAILED = 'REQUEST_GAME_DETAIL_FAILED';
export function requestListGameSuccess(payload) {
  return {
    type: REQUEST_LIST_GAME_SUCCESS,
    payload,
  };
}

export function requestListGameFailed(payload) {
  return {
    type: REQUEST_LIST_GAME_FAILED,
    payload,
  };
}

export function requestGameDetailSuccess(payload) {
  return {
    type: REQUEST_GAME_DETAIL_SUCCESS,
    payload,
  };
}

export function requestGameDetailFailed(payload) {
  return {
    type: REQUEST_GAME_DETAIL_FAILED,
    payload,
  };
}
