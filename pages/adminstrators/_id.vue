<template>
  <main class="mx-5">
    <div class="d-flex justify-content-between">
      <button
        class="btn bg-danger btn-danger rounded-pill px-5"
        @click="$router.back()"
        style="font-size: 1.3rem;"
      >
        <i class="feather icon-arrow-left"></i>
        Back
      </button>

      <h1 class="mb-0 mr-3">Admin Details</h1>
      <p class="date">November 20, 2020</p>
    </div>

    <form class="questions-form mt-4">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Name</label>
            <input class="form-control py-4 px-3 shadow border-0" />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label>E-mail Address</label>
            <input readonly class="form-control py-4 px-3 border-0" />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label>Password</label>
            <input
              readonly
              type="password"
              class="form-control py-4 px-3 border-0"
            />
            <p class="generate-password">Auto-Generate</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group select-box">
            <label>Category</label>
            <select class="form-control py-4 px-3 border-0 shadow">
              <option>Reader</option>
              <!-- <option>SuperAdmin</option> -->
              <option>Editor</option>
            </select>
          </div>
        </div>
        <div class="col-12 mt-4 text-center">
          <button
            type="submit"
            class="btn btn-secondary px-4 py-3 rounded-pill main-btn"
          >
            Update
          </button>

          <button class="px-3 border-0 bg-transparent mt-3 delete-btn">
            <i
              class="feather text-danger icon-trash-2"
              style="font-size: 36px;"
            ></i>
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  middleware: 'authenticated',
};
</script>

<style></style>
