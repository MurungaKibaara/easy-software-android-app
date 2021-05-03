import axios from 'axios';
import { API_URL } from '../config';
import * as types from '../actions.types';

const requestUsersLoading = () => ({
  type: types.REQUESTS_USERS_LOADING,
});

const requestUsersSuccess = (data) => ({
  type: types.REQUESTS_USERS_SUCCESS,
  data,
});

const requestUsersUpdate = (data) => ({
  type: types.REQUESTS_USERS_UPDATE,
  data,
});

const requestUsersError = (error) => ({
  type: types.REQUESTS_USERS_FAILURE,
  error,
});

export const fetchUsersData = () => async (dispatch) => {
    dispatch(requestUsersLoading());

    try {
        const response = await axios.get(API_URL);
        dispatch(requestUsersSuccess(response.data));

    } catch (error) {
      console.log({ error })
        dispatch(requestUsersError(error.response.error.toString()));
    }
};

export const updateUsersData = (params, id) => async (dispatch) => {
    dispatch(requestUsersLoading());
    const URL = `${API_URL}/${id}`;

    const config = {
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.patch(URL, params, config);
        dispatch(requestUsersUpdate(response.data));
    } catch (error) {
        dispatch(requestUsersError(error.response.data.detail))
    }
};

