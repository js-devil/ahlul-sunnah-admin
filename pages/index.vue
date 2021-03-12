<template>
  <div class="login-page">
    <div class="image"></div>
    <div class="trapezoid"></div>
    <form class="text-center" @submit.prevent="validateSubmit">
      <img src="/img/logo-dark.svg" class="mb-5" />
      <h3 class="font-weight-bold mb-0">Admin Login</h3>

      <p class="text-danger font-weight-bold" v-if="!!errorMessage">
        {{ errorMessage }}
      </p>

      <div class="form-group mt-4">
        <input
          type="email"
          v-model="auth.email"
          placeholder="E-mail Address"
          :disabled="loading"
          class="form-control py-4 border-0"
        />
      </div>

      <div class="form-group mb-4">
        <input
          :disabled="loading"
          v-model="auth.password"
          type="password"
          placeholder="Password"
          class="form-control py-4 border-0"
        />
      </div>

      <button
        type="submit"
        class="btn btn-secondary px-3 py-2 rounded-pill main-btn"
      >
        {{ loading ? 'Logging in...' : 'Login' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    auth: {},
    errorMessage: null,
    loading: false,
    loan_offer: {},
  }),
  methods: {
    validateSubmit() {
      const { email, password } = this.auth;

      if (!email || !this.validateEmail(email))
        return (this.errorMessage = 'Enter a valid email address');

      if (!password || password.length < 8)
        return (this.errorMessage =
          'Password should have at least eight (8) characters');

      this.errorMessage = null;
      this.login({ email, password });
    },
    async login(data) {
      this.loading = true;

      try {
        const res = await this.$axios({
          method: 'POST',
          url: '/login',
          data,
        });
        this.loading = false;

        // localStorage.setItem(
        //     'user',
        //     JSON.stringify({ ...user, token, loggedIn: true }),
        //   );

        // this.$store.commit('set', {
        //   user: {
        //     ...user,
        //     token,
        //     loggedIn: true,
        //   },
        //   loading: true,
        // });
        console.log({ data: res.data });
      } catch (e) {
        this.loading = false;
        const msg = this.catchErrors(e);
        this.errorMessage = msg || 'This account does not exist!'
      }
    },
  },
  mounted() {},
};
</script>

<style></style>
