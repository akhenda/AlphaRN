export default {
  // Functions return fixtures
  signUpUser: () => {
    return {
      ok: true,
      data: require('src/services/fixtures/user.json'),
    };
  },
  loginUser: () => {
    return {
      ok: true,
      data: require('src/services/fixtures/loginUser.json'),
    };
  },
  validateToken: () => {
    return {
      ok: true,
      data: require('src/services/fixtures/validToken.json'),
    };
  },
  getUser: () => {
    return {
      ok: true,
      data: require('src/services/fixtures/user.json'),
    };
  },
};
