<template>
  <main class="mx-5 px-2">
    <div class="d-flex justify-content-between mt-3">
      <h1 class="mb-0">Questions</h1>

      <nav class="nav status-tabs">
        <a class="nav-link active" href="#">All</a>
        <a class="nav-link" href="#">Pending</a>
        <a class="nav-link" href="#">Answered</a>
      </nav>

      <button
        class="btn btn-secondary px-4 py-3 rounded-pill main-btn"
        @click="$router.push('/questions/details')"
      >
        Add Question
      </button>
    </div>

    <div class="questions-table mt-3" id="scroller">
      <table class="table table-striped table-borderless">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">E-mail Address</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bad Energy</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Life is a Mess</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Up, Up and Away</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Bad Energy</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Life is a Mess</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Up, Up and Away</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Bad Energy</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Life is a Mess</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Up, Up and Away</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Bad Energy</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Life is a Mess</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Up, Up and Away</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Bad Energy</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Life is a Mess</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <span>November 20, 2020</span>
              <button class="px-3 border-0 bg-transparent ml-3">
                <i class="feather icon-arrow-right"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Up, Up and Away</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <span>November 20, 2020</span>
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
