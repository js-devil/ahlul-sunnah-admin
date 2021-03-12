<template>
  <main class="mx-5 px-2">
    <div class="d-flex justify-content-between mt-3">
      <h1 class="mb-0">Question Categories</h1>
      <button class="btn btn-secondary px-4 py-2 rounded-pill main-btn">
        Add New
      </button>
    </div>

    <div class="row mt-3 ">
      <div class="col-4">
        <div class="shadow category p-3 m-3">
          <h5>Fiqh</h5>
          <p>5 questions</p>
          <button class="px-3 border-0 bg-transparent">
            <i class="feather icon-trash-2 text-danger"></i>
          </button>
        </div>
      </div>

      <div class="col-4">
        <div class="shadow category p-3 m-3">
          <h5>Chamapagne Papi</h5>
          <p>5 questions</p>
          <button class="px-3 border-0 bg-transparent">
            <i class="feather icon-trash-2 text-danger"></i>
          </button>
        </div>
      </div>

      <div class="col-4">
        <div class="shadow category p-3 m-3">
          <h5 style="font-size: 1.5rem">Fiqh</h5>
          <p>5 questions</p>
          <button class="px-3 border-0 bg-transparent">
            <i class="feather icon-trash-2 text-danger"></i>
          </button>
        </div>
      </div>

      <div class="col-4">
        <div class="shadow category p-3 m-3">
          <h5 class="mt-n1">Chamapagne Papi</h5>
          <p>5 questions</p>
          <button class="px-3 border-0 bg-transparent">
            <i class="feather icon-trash-2 text-danger"></i>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  middleware: 'authenticated',
};
</script>

<style></style>
