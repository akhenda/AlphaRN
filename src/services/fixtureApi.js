export default {
  // Functions return fixtures
  signUpUser: () => {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        status: 201,
        data: require('src/services/fixtures/user.json'),
      });
    });
  },
  loginUser: () => {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        status: 200,
        data: require('src/services/fixtures/loginUser.json'),
      });
    });
  },
  validateToken: () => {
    return new Promise((resolve) => {
      resolve({
        ok: false,
        status: 200,
        data: require('src/services/fixtures/validToken.json'),
      });
    });
  },
  getUser: () => {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        status: 200,
        data: require('src/services/fixtures/user.json'),
      });
    });
  },
};
