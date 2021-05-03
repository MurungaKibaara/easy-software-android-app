import * as types from '../actions.types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTS_USERS_LOADING:
      return {
        ...state,
        loading: true,
        data: [],
        error: '',
      };
    case types.REQUESTS_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };

    case types.REQUESTS_USERS_UPDATE:
      return {
        ...state,
        loading: false,
        data: [
              ...state.data.map((item) =>
                item.id === action.data.id ? action.data : item
              ),
            ],
        error: '',
      };
    case types.REQUESTS_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export { users };
