export const state = () => ({
  user: {
    loggedIn: false,
  },
});

export const mutations = {
  set(state, data) {
    for (let key of Object.keys(data)) state[key] = data[key];
  },
};

export const getters = {
  isAuthenticated(state) {
    return state.user.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
};
