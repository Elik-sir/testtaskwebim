import { FETCH_TYPES } from './constants';
const defaultState = {
  isLoading: false,
  token: '',
  errorMessage: undefined,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TYPES.START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TYPES.SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload,
      };
    case FETCH_TYPES.FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
