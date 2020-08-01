import { FETCH_TYPES, FILTER_USERNAME, GET_TOKEN } from './constants';
const defaultState = {
  isLoading: false,
  token: '781bd9f1de084f4daa7ba2aa8a71a2eab855354e',
  errorMessage: undefined,
  users: [],
  filterUsername: '',
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TYPES.START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TYPES.SUCCESS:
      if (action.subtype === GET_TOKEN) {
        return {
          ...state,
          isLoading: false,
          token: action.payload,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          users: action.payload.sort((a, b) => (a.id > b.id ? 1 : -1)),
        };
      }
    case FETCH_TYPES.FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case FILTER_USERNAME:
      return {
        ...state,
        filterUsername: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
