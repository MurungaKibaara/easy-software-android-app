import axios from 'axios';
import { API_URL } from '../Config';
import * as types from '../actions.types';

const requestUsersLoading = () => ({
  type: types.REQUEST_USERS_REQUEST,
});

const requestUsersSuccess = (data) => ({
  type: types.REQUEST_USERS_SUCCESS,
  data,
});

const requestUsersUpdate = (data) => ({
  type: types.REQUEST_USERS_UPDATE,
  data,
});

const requestUsersError = (error) => ({
  type: types.REQUEST_USERS_FAILURE,
  error,
});

export const fetchUsersData = () => async (dispatch) => {
    dispatch(requestUsersLoading());
    const URL = `${API_URL}`;

    const config = {
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
    };

    try {
        const response = await axios.get(URL, config);
        dispatch(requestUsersSuccess(response.data));

    } catch (error) {
        dispatch(requestUsersError(error.response.error.toString()));
    }
};

export const updateUsersData = (params) => async (dispatch) => {
    dispatch(requestUsersLoading());
    const URL = `${API_URL}/${params.id}`;

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

