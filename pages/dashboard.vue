<template>
  <main class="mx-5 px-2">
    <h1 class="mb-0">Dashboard</h1>

    <div class="d-flex justify-content-between">
      <div class="dashboard-card p-3 my-3">
        <h4 class="mb-4">Questions Asked</h4>
        <div class="d-flex justify-content-between">
          <h2 class="mb-0">15</h2>
          <button class="btn btn-secondary px-4 mt-4 mr-3 rounded-pill">
            See All
            <i class="feather icon-chevron-right ml-3"></i>
          </button>
        </div>
      </div>

      <div class="dashboard-card p-3 my-3">
        <h4 class="mb-4">Questions Answered</h4>
        <div class="d-flex justify-content-between">
          <h2 class="mb-0">3</h2>
          <button class="btn btn-secondary px-4 mt-4 mr-3 rounded-pill">
            See All
            <i class="feather icon-chevron-right ml-3"></i>
          </button>
        </div>
      </div>
      <div class="dashboard-card p-3 my-3">
        <h4 class="mb-4">Questions Pending</h4>
        <div class="d-flex justify-content-between">
          <h2 class="mb-0">4</h2>
          <button class="btn btn-secondary px-4 mt-4 mr-3 rounded-pill">
            See All
            <i class="feather icon-chevron-right ml-3"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between">
      <div class="dashboard-card2 p-3 my-3">
        <h4 class="mb-4">Library Downloads</h4>
        <div class="d-flex justify-content-between">
          <h2 class="mb-0">25</h2>
          <button class="btn btn-secondary px-4 mt-4 mr-3 rounded-pill">
            See All
            <i class="feather icon-chevron-right ml-3"></i>
          </button>
        </div>
      </div>

      <div class="dashboard-card2 p-3 my-3">
        <h4 class="mb-4">Questions Categories</h4>
        <div class="d-flex justify-content-between">
          <h2 class="mb-0">15</h2>
          <button class="btn btn-secondary px-4 mt-4 mr-3 rounded-pill">
            See All
            <i class="feather icon-chevron-right ml-3"></i>
          </button>
        </div>
      </div>
      <div class="dashboard-card p-3 my-3 bg-white"></div>
    </div>

    <div class="mt-3">
      <h4 style="font-weight: 600;">Recently Asked Questions</h4>
      <div class="d-flex justify-content-between">
        <div class="recent-questions d-flex justify-content-between px-4 py-3">
          <p class="date">20-01-2021</p>
          <h3>Dolorem exercitation fringilla viverra</h3>
          <button class="px-3 border-0 bg-transparent ml-5 mt-2">
            <i class="feather icon-arrow-right er"></i>
          </button>
        </div>

        <div class="recent-questions d-flex justify-content-between px-4 py-3">
          <p class="date">20-01-2021</p>
          <h3>Dolorem exercitation fringilla viverra</h3>
          <button class="px-3 border-0 bg-transparent ml-5 mt-2">
            <i class="feather icon-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
