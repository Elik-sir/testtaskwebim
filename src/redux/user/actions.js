import { FETCH_TYPES } from './constants';

export const fetchStart = () => ({
  type: FETCH_TYPES.START,
});

export const fetchTokenSuccess = (token) => ({
  type: FETCH_TYPES.SUCCESS,
  payload: token,
});
export const fetchTokenFailure = (error) => ({
  type: FETCH_TYPES.FAILURE,
  payload: error,
});
export const fetchStartAsync = (credentional) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const response = await fetch(
        `http://emphasoft-test-assignment.herokuapp.com/api-token-auth/`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentional.username,
            password: credentional.password,
          }),
        },
      );

      if (response.status >= 400) throw new Error('Wrong credentionals');
      const token = await response.json();
      dispatch(fetchTokenSuccess(token));
    } catch (e) {
      dispatch(fetchTokenFailure(e.message));
    }
  };
};
