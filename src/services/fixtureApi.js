export default {
  // Functions return fixtures
  signUpUser: () => {
    return {
      ok: true,
      status: 201,
      data: require('src/services/fixtures/user.json'),
    };
  },
  loginUser: () => {
    return {
      ok: true,
      status: 200,
      data: require('src/services/fixtures/loginUser.json'),
    };
  },
  validateToken: () => {
    return {
      ok: true,
      status: 200,
      data: require('src/services/fixtures/validToken.json'),
    };
  },
  getUser: () => {
    return {
      ok: true,
      status: 200,
      data: require('src/services/fixtures/user.json'),
    };
  },
};
