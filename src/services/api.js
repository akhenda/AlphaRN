// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import Config from 'react-native-config';

// our "constructor"
const create = (baseURL = 'https://example.com/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: 10000,
  });
  
  const setHeader = (header, value) => api.setHeader(header, value);

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const signUpUser = (email, username, firstName, lastName, password) => {
    return api.post(
      'custom/v1/registration',
      {
        email,
        username,
        password,
        last_name: lastName,
        first_name: firstName,
      },
      { headers: { 'API-KEY': Config.ALPHARN_API_KEY } },
    );
  };
  const loginUser = (email, password) => api.post('auth/v1/token', { username: email, password });
  const validateToken = (token) => {
    return api.post(
      'auth/v1/token/validate',
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );
  };
  const getUser = context => api.get(`/users/me?context=${context}`);

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    setHeader,
    signUpUser,
    loginUser,
    validateToken,
    getUser,
  };
};

// let's return back our create method as the default.
export default { create };
