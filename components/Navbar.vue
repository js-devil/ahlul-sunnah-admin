<template>
  <header class="d-flex justify-content-between p-3">
    <a class="d-flex" href="#" data-target="#menuModal" data-toggle="modal">
      <i class="feather icon-chevron-right"></i>
      <h3 class="mt-2" style="font-weight: 600;">MENU</h3>
    </a>

    <Menu />

    <div class="d-flex">
      <div class="mr-3 font-weight-bold">
        <img src="/img/logo-dark.svg" alt="logo" />
      </div>
      <img src="/img/user.svg" alt="user" />
    </div>
  </header>
</template>

<script>
import Menu from './Menu.vue';
export default {
  components: { Menu },
};
</script>

<style></style>
