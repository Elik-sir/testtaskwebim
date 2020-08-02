import {
  FETCH_TYPES,
  GET_TOKEN,
  GET_USERS,
  FILTER_USERNAME,
  SORT_USERS,
  LOGOUT,
} from './constants';

export const fetchStart = () => ({
  type: FETCH_TYPES.START,
});

export const fetchTokenSuccess = (token) => ({
  type: FETCH_TYPES.SUCCESS,
  subtype: GET_TOKEN,
  payload: token,
});
export const fetchUsersSuccess = (users) => ({
  type: FETCH_TYPES.SUCCESS,
  subtype: GET_USERS,
  payload: users,
});
export const fetchTokenFailure = (error) => ({
  type: FETCH_TYPES.FAILURE,
  payload: error,
});
export const fetchTokenStartAsync = (credentials) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const response = await fetch(
        `https://emphasoft-test-assignment.herokuapp.com/api-token-auth/`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        },
      );
      if (response.status >= 400) throw new Error('Wrong credentials');
      const token = await response.json();
      dispatch(fetchTokenSuccess(token.token));
    } catch (e) {
      dispatch(fetchTokenFailure(e.message));
    }
  };
};
export const fetchUsersStartAsync = (token) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const response = await fetch(
        'https://emphasoft-test-assignment.herokuapp.com/api/v1/users',
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        },
      );

      if (response.status >= 400) throw new Error('Wrong credentials');
      const users = await response.json();
      dispatch(fetchUsersSuccess(users));
    } catch (e) {
      dispatch(fetchTokenFailure(e.message));
    }
  };
};

export const filterUsername = (username) => ({
  type: FILTER_USERNAME,
  payload: username,
});

export const sortUsers = (order) => ({
  type: SORT_USERS,
  payload: order,
});
export const logout = () => ({
  type: LOGOUT,
});
