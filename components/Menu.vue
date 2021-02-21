<template>
  <div class="modal fade" id="menuModal" tabindex="-1">
    <div class="modal-dialog mt-0">
      <div class="modal-content border-0 text-center">
        <div class="modal-body">
          <div class="avatar p-3 mx-5">
            <img class="mb-3" src="/img/user.svg" />
            <h3 class="mb-0">Admin</h3>
          </div>

          <ul class="mt-5 list-unstyled">
            <template v-for="link in links">
              <li
                data-dismiss="modal"
                :class="{ active: $route.name === link }"
                :key="link"
              >
                <nuxt-link :to="{ path: link }">{{ link }}</nuxt-link>
              </li>
            </template>
            <li class="mt-3">
              <a type="button" @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ['dashboard', 'questions', 'library', 'categories', 'adminstrators'],
  }),
  methods: {
    logout() {
      this.$swal
        .fire({
          title: 'Are you sure you want to log out?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
        })
        .then(result => {
          if (result.isConfirmed) {
            this.$toast.fire({
              customClass: 'toast-success',
              icon: 'error',
              title: 'Content Added',
            });
            return;
          }

          this.$toast.fire({
            customClass: 'toast-danger',
            icon: 'error',
            title: 'Content deleted',
          });
        });
    },
  },
};
</script>

<style></style>
