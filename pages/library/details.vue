<template>
  <main class="mb-3 mx-5">
    <div class="d-flex justify-content-between">
      <button
        @click="$router.back()"
        class="btn bg-danger btn-danger rounded-pill px-5"
        style="font-size: 1.3rem;"
      >
        <i class="feather icon-arrow-left"></i>
        Back
      </button>
      <h1 class="mb-0 mr-3">Details</h1>
      <p class="date">November 20, 2020</p>
    </div>

    <div class="row mt-4">
      <div class="col-4 text-center">
        <div class="library-image mb-3">
          <img
            src="https://its.org.uk/wp-content/uploads/2013/09/War-Peace-WEB.jpg"
            alt=""
          />
        </div>
        <div>
          <button
            style="background-color: #9e5800; font-weight: 600;"
            class="btn btn-sm px-4 py-3 rounded-pill text-white"
          >
            Change Picture
          </button>
        </div>
      </div>
      <div class="col-8">
        <form class="questions-form">
          <div class="row">
            <div class="col-9">
              <div class="form-group">
                <label>Title</label>
                <input class="form-control py-4 px-3 shadow border-0" />
              </div>
            </div>
            <div class="col-3">
              <div class="form-group select-box">
                <label>Type</label>
                <select class="form-control py-4 px-3 border-0 shadow">
                  <option>Book</option>
                  <option>Audio</option>
                </select>
              </div>
            </div>
            <div class="col-9">
              <div class="form-group">
                <label>Author/Speaker</label>
                <input class="form-control py-4 px-3 shadow border-0" />
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label>Downloads</label>
                <input
                  readonly
                  class="form-control py-4 px-3 border-0"
                  type="number"
                  value="10"
                />
              </div>
            </div>
            <div class="col-6 d-flex">
              <div class="form-group">
                <label>Content</label>
                <input class="form-control py-4 px-3 shadow border-0" />
              </div>
              <button
                class="text-center mt-4 ml-3 px-3 border-0 bg-transparent no-outline"
                style="color: #9e5800;"
              >
                <i
                  class="feather icon-upload-cloud"
                  style="font-size: 24px;"
                ></i>
                <br />
                Change Content
              </button>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label>Description</label>
                <textarea
                  cols="20"
                  rows="6"
                  class="form-control p-3 shadow border-0"
                  id="scroller"
                >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odit non aliquid inventore blanditiis quis?
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odit non aliquid inventore blanditiis quis?Lorem
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odit non aliquid inventore blanditiisquis?
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odit non aliquid inventore blanditiisquis?
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odit non aliquid inventore blanditiisquis?
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odit non aliquid inventore blanditiisquis?
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odit non aliquid inventore blanditiisquis?
                                        ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odit non aliquid inventore blanditiis quis?
                                        </textarea
                >
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-12 mt-4 text-center">
        <button
          type="submit"
          class="btn btn-secondary px-4 py-3 rounded-pill main-btn"
        >
          Update
        </button>

        <button class="px-3 border-0 bg-transparent mt-3 no-outline">
          <i
            class="feather text-danger icon-trash-2"
            style="font-size: 36px;"
          ></i>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
p.date {
  padding: 10px;
  font-size: 1rem;
}
</style>
