<template>
  <div class="login-page">
    <div class="image"></div>
    <div class="trapezoid"></div>
    <form class="text-center">
      <img src="/img/logo-dark.svg" class="mb-5 mr-5 ml-n5" />
      <h3 class="font-weight-bold mb-0">Admin Login</h3>
      <div class="form-group mt-4">
        <input
          type="text"
          placeholder="Username"
          class="form-control py-4 border-0"
        />
      </div>
      <div class="form-group mb-4">
        <input
          type="password"
          placeholder="Password"
          class="form-control py-4 border-0"
        />
      </div>

      <button
        @click.prevent="$router.push('/dashboard')"
        class="btn btn-secondary px-3 py-2 rounded-pill main-btn"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style></style>
