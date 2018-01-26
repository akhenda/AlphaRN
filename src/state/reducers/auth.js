import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  AUTH_LOADING,
  CLEAR_INPUT_DATA,
  AUTH_FIELD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNOUT_USER_SUCCESS,
} from 'src/state/types';

const INITIAL_STATE = {
  authenticated: false,
  fullName: '',
  username: '',
  email: '',
  password: '',
  loading: false,
  error: {},
  token: 'dummy',
  user: null,
  message: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_FIELD_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case AUTH_LOADING:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        authenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        token: 'dummy',
        loading: false,
        error: { message: action.payload.message },
      };
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, authenticated: true };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload.message ? { message: action.payload.message } : {},
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        error: {},
        loading: false,
        user: action.payload,
        message: 'Account created succesfuly. Log in below',
      };
    case SIGNUP_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_INPUT_DATA:
      return {
        ...state,
        error: {},
        email: '',
        password: '',
        fullName: '',
        username: '',
      };
    case SIGNOUT_USER_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const persistConfig = {
  storage,
  key: 'auth',
  blacklist: [
    'error',
    'email',
    'message',
    'loading',
    'password',
    'fullName',
    'username',
    'authenticated',
  ],
};

export default persistReducer(persistConfig, authReducer);
