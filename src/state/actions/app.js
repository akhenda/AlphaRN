import {
  DONE_APP_INTRO,
  APP_FIELD_CHANGED,
  DONE_SURVEY,
  UPDATE_LOCATION,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from 'src/state/types';


export const doneAppIntro = () => {
  return { type: DONE_APP_INTRO };
};

export const appFieldChanged = ({ prop, value }) => {
  return {
    type: APP_FIELD_CHANGED,
    payload: { prop, value },
  };
};

export const doneSurvey = () => {
  return { type: DONE_SURVEY };
};

export const updateLocation = (location) => {
  return {
    type: UPDATE_LOCATION,
    payload: location,
  };
};

export const addFavourite = (item) => {
  return {
    type: ADD_FAVOURITE,
    payload: item,
  };
};

export const removeFavourite = (id) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: id,
  };
};
