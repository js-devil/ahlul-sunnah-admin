<template>
  <main class="mx-5 px-2">
    <div class="d-flex justify-content-between mt-3">
      <h1 class="mb-0">Administrators</h1>

      <button class="btn btn-secondary px-4 py-3 rounded-pill main-btn">
        Add Admin
      </button>
    </div>

    <div class="questions-table mt-3" id="scroller">
      <table class="table table-striped table-borderless">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fulaan Ibn Super Admin</td>
            <td>Super Admin</td>
            <td>
              <span class="mr-5">November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Fulaan Ibn Reader</td>
            <td>Reader</td>
            <td>
              <span class="mr-5">November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Fulaan Ibn Editor</td>
            <td>Editor</td>
            <td>
              <span class="mr-5">November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-center">
              <button class="btn btn-sm btn-secondary px-4 py-2 rounded-pill">
                Load More
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
